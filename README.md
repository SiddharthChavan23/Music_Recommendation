# Spotify Song Recommendation System

Implementation of web application using Flask![Flask](https://user-images.githubusercontent.com/25181517/183423775-2276e25d-d43d-4e58-890b-edbc88e915f7.png
)
, React![React](https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png) with Docker![Docker](https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png)

## Getting Started

This project consists of Flask application for the backend API, React for client side application.This project also use `docker-compose` to make it easy run all of the container at once.

This application will showcase:

- Flask application with Users and Auth endpoint
- NextJS application that showing normal route and authenticated routes.

### Prerequisites

Before you run this application make sure you have this installed in your machine:

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [docker-compose](https://docs.docker.com/compose/install/)
- [NPM](https://www.npmjs.com/)


### Running app as a container on Docker

I have pushed the docker image to the docker hub and you can pull it using below given scripts:

Login to Docker:

```
$ docker login -u "<username>" -p "<password>" docker.io 

```
#### Pull the Docker Image:

```
$ docker pull siddharthc23/react-flask-app-client:latest   
$ docker pull siddharthc23/react-flask-app-api:latest   
```

Run the Docker Container:
```
$ docker-compose up -d

```

After you run above commands you can open the application from [http://localhost:3000/](http://localhost:3000/)

### Running app on Local Machine

Follow these steps to set up and run the application on your local machine:

Clone the Repository:
```
$ https://github.com/SiddharthChavan23/Music_Recommendation.git
$ cd Music_Recommendation

```

Create a new virtual environment:
```
$ python -m venv venv

```
Activate the virtual environment:
```
$  venv\Scripts\activate

```
Download dependencies using the requirements.txt file:
```
$  pip install -r requirements.txt

```

Client ID and Secret: [![linkedin](https://img.shields.io/badge/Spotify-1ED760?&style=for-the-badge&logo=spotify&logoColor=white)](https://developer.spotify.com/dashboard)(Click above)
```
src
├── backend
│   └── main.py


client_id = ''
client_secret = ''


```

## Screenshots

![App Screenshot](/images/spotify_api.png)


Install Dependencies(Flask):
```
$  npm install

```

Host Front-End Locally:
```
$  npm start

Locally hosted on : http://localhost:3000/

```
Run Flask API:
```
$  flask --app main run
Locally hosted on : http://127.0.0.1:5000/

```


### Project Screenshot


Home
![App Screenshot](/images/Home1)

Search Results
![App Screenshot](/images/Home2)
Recommendations
![App Screenshot](/images/Home3)
Song MetaData
![App Screenshot](/images/Home4)




## Model
The model diverges from traditional recommendation engines by leveraging song features instead of user interactions. Using Nearest Neighbor models, it compute similarities between songs based on their feature vectors, offering clear and interpretable recommendations.

## Dataset used
```
Vatsal Mavani. (n.d.). Spotify Dataset 1921-2020, 160k+ Tracks (Version 1.0) [Data set]. Kaggle. 
```
[Link to Dataset](https://www.kaggle.com/datasets/vatsalmavani/spotify-dataset)


## Dataset






