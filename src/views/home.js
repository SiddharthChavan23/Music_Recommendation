import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Music Recommendation System</title>
        <meta property="og:title" content="Jovial Genuine Nightingale" />
      </Helmet>
      <header data-role="Accordion" className="home-header">
        <img
          alt="logo"
          src="https://media1.tenor.com/m/9_EEizTZePgAAAAd/baby.gif"
          className="home-image"
        />
        <div className="home-separator"></div>
        <nav className="home-nav"></nav>
        <div data-role="AccordionHeader" className="home-accordion-header">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="AccordionContent" className="home-accordion-content">
          <div className="home-nav1">
            <NavigationLinks rootClassName="rootClassName20"></NavigationLinks>
          </div>
        </div>
      </header>
      <div className="home-hero">
        <span className="home-text">
          <span>
            <span>
            
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <br></br>
          <span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <button autoFocus="true" className="home-button button">
          Search
        </button>
        <input
          type="text"
          placeholder="placeholder"
          className="home-input input"
        />
        <div className="home-container1"></div>
        <div className="home-btn-group"></div>
      </div>
    </div>
  )
}

export default Home
