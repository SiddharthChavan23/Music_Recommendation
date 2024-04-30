import numpy as np
import pandas as pd
from flask import Flask, request, render_template, jsonify
import pickle
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

# Spotify API credentials
client_id = '191780d36b8e414a8db1fab6046ac941'
client_secret = '5d71c172fcef44e48b212c64829fee44'

# Initialize Spotipy client
client_credentials_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)



df = pd.read_csv('src/dataset/df_good.csv', index_col=0)  # Main dataset
spotify_df = pd.read_csv('src/dataset/data_dupli_clean.csv')  # Spotify dataset
spotify_df.index = spotify_df['track_id']
spotify_df = spotify_df.drop(['track_id'], axis=1)


# Load model
model = pickle.load(open('src/Model/knn_cleaned_model.pkl', 'rb'))


# Function to recommend songs based on index
def recommend(idx, model, number_of_recommendations=5):
    query = spotify_df.loc[idx].to_numpy().reshape(1, -1)
    distances, indices = model.kneighbors(query, n_neighbors=number_of_recommendations)
    
    recommendations = []
    
    for index in indices[0]:
        track_id = df.loc[index, 'track_id']
        track_info = sp.track(track_id)
        
        images = None
        for image in track_info['album']['images']:
            if image['height'] == 300 and image['width'] == 300:
                images = image['url']
                break
        
        recommendation = {
            'track_name': df.loc[index, 'track_name'],
            'artists': df.loc[index, 'artists'],
            'track_id': track_id,
            'image_url': images
        }
        recommendations.append(recommendation)

    return recommendations


# Route for checking if the API is working
@app.route('/', methods=['GET'])
def api_working():
    return jsonify({'message': 'API is working!'}), 200

# Route for searching a song
@app.route('/search', methods=['GET'])
def search():
    song_title = request.args.get('title')
    
    if song_title:
        results = df[['artists', 'track_name', 'track_id']].reset_index().\
                    loc[df['track_name'] == song_title].\
                    rename(columns={'index': 'position'}).\
                    to_dict(orient='records')
        
        # Fetch the song URL from Spotify for each track
        for result in results:
            track_id = result['track_id']
            track_info = sp.track(track_id)  # Assuming sp is initialized somewhere
            
            # Filter out the image with dimensions 300x300
            for image in track_info['album']['images']:
                if image['height'] == 300 and image['width'] == 300:
                    result['image_url'] = image['url']
                    break
        
        return jsonify(results=results)
    else:
        return jsonify({'error': 'Missing title parameter'})


# Route for getting recommendations
@app.route('/recommendations', methods=['GET'])
def get_recommendations():
    ind = request.args.get('idx', type=int)
    nor = request.args.get('nor', type=int, default=5)
    
    if ind is None:
        return jsonify({'error': 'You must provide a valid index (idx)'}), 400
    
    idx = df['track_id'].loc[ind]

    if idx is None:
        return jsonify({'error': 'Invalid track index provided'}), 400
    
    recommendations = recommend(idx, model, nor)
    return jsonify({'recommendations': recommendations})


# Route for getting track information
@app.route('/track/<track_id>', methods=['GET'])
def get_track_info(track_id):
    # Make a request to get information about the track
    track_info = sp.track(track_id)
    
    # Extract relevant information
    track_name = track_info['name']
    artists = ", ".join([artist['name'] for artist in track_info['artists']])
    album = track_info['album']['name']
    release_date = track_info['album']['release_date']
    duration_ms = track_info['duration_ms']
    popularity = track_info['popularity']
    images = track_info['album']['images']  # List of images in different sizes
    song_link = track_info['external_urls']['spotify']  # Spotify link to the song

    # Create a dictionary to store the information
    track_data = {
        'track_name': track_name,
        'artists': artists,
        'album': album,
        'release_date': release_date,
        'duration_ms': duration_ms,
        'popularity': popularity,
        'images': images,
        'song_link': song_link
    }
    
    return jsonify(track_data)


if __name__ == '__main__':
    app.run(debug=True)  # Run the app in debug mode
