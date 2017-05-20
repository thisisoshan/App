import React from 'react'
import Nav from '../components/Nav';
import Head from 'next/head';
import 'isomorphic-fetch';

export default class extends React.Component {

  static async getInitialProps () {
    const url = "https://thisisoshan.github.io/App/static/data/"
    const file= "index"
    const res = await fetch(url + file + '.json')
    const data = await res.json()
    return { data }
  }
  

render () {
      return (
        <div>
          <Head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
              <title>Welcome | Strontium University</title>
              <link href="/static/img/favicon/favicon.ico" rel="icon"/>
              <link href="static/css/reset.css" rel="stylesheet"/>
              <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
              <link href="static/materialize/css/materialize.min.css" rel="stylesheet"/>
              <link href="static/build/css/global.css" rel="stylesheet"/>
              <link href="static/build/css/index.css" rel="stylesheet" />

          </Head>
          <section className="fullscreen">
              <div className="fullscreen landing-bg">
                <div className="welcome">
                  <h4>Welcome To</h4>
                  <h1>Strontium University</h1>
                  <a href="#more"><p>WE ARE CREATING THE CREATORS</p></a>
                </div>
              </div>
            </section>
          <Nav Page="Home" />
          <main id="more" className="fullscreen">
            <section className="welcome-text">
              <h5>{this.props.data.welcomeTitle}</h5>
              <p>{this.props.data.welcomeText}</p>
            </section>

          </main>
          <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
          <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
          <script type="text/javascript" src="/static/build/js/global.js"></script>
        </div>

      );
  }
}