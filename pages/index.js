import React from 'react'
import Nav from '../components/Nav'
import Card from '../components/Card'
import Head from 'next/head'
import 'isomorphic-fetch'

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
              <h5>We are creating the creators</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus incidunt ducimus ad, laborum in, laboriosam odit molestias illo. Hic aperiam impedit corrupti, et quis quo magnam consequuntur. Dolores similique, saepe? adipisicing elit. Doloribus incidunt ducimus ad, laborum in, laboriosam odit molestias illo. Hic aperiam impedit corrupti, et quis quo magnam consequuntur. Dolores similique, saepe? laboriosam odit molestias illo. Hic aperiam impedit corrupti, et quis quo magnam consequuntur. Dolores similique</p>
            </section>
            <section className="cards">

              {this.props.data.card.map(function(post, i) {
                return <Card key={i} img={post.cardImgName} Title={post.cardTitle} clsDesc={post.cardTitleClass} clsImg={post.cardImgClass} />
              })}
              
            </section>

          </main>
          <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
          <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
          <script type="text/javascript" src="/static/build/js/global.js"></script>
        </div>

      );
  }
}
