//import $ from 'jquery';
//import moment from 'moment';
//import _ from 'lodash';
//import TweenMax from "gsap";
import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>Hello, werlbzs!</h1>
        <Footer />
      </div>
    )
  }
}
