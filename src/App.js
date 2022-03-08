import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import ListImage from './component/ListImage'; 

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Component dari Class App</h1>
        <ListImage />
        <Footer judul='Halaman Footer' nama='Aufa' />
      </div>
    );
  }
} export default App;
