import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Head from 'next/head';

export default () => (

<div>
  <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Events | Strontium Univesity</title>
      <link href="/static/img/favicon/favicon.ico" rel="icon"/>
      <link href="static/css/reset.css" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      <link href="static/materialize/css/materialize.min.css" rel="stylesheet"/>
      <link href="static/build/css/global.css" rel="stylesheet"/>
      <link href="static/build/css/secondary.css" rel="stylesheet"/>
  </Head>

  <Nav Page="Events" />
  <Hero />
  <main className="fullscreen">

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      <script type="text/javascript" src="/static/build/js/global.js"></script>
  </main>
</div>
)
