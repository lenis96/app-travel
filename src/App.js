import React from 'react';
// import logo from './logo.svg';
import Header from './containers/Header'

function App(props) {

  return (
    <div>

    <Header/>

<main role="main" className="container">
  <div className="jumbotron">
    <h1>Navbar example</h1>
    <p className="lead">This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to the top of your browser’s viewport.</p>
    <a className="btn btn-lg btn-primary" href="/docs/4.5/components/navbar/" role="button">View navbar docs &raquo;</a>
  </div>
</main>
    </div>
  );
}

export default App;
