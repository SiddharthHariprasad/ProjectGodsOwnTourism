import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css'
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import M from 'materialize-css';
import { BrowserRouter } from 'react-router-dom';



// Auto initialize all materialize functions
M.AutoInit();

function autoplay() {
  var carousel = document.querySelectorAll('.carousel');
  M.Carousel.init(carousel, 'next');
  setTimeout(autoplay,5000);
}

document.addEventListener('DOMContentLoaded', function() {
  var carousel = document.querySelectorAll('.carousel.carousel-slider');
  M.Carousel.init(carousel, 
    {
      fullWidth: true,
      indicators: true,
      duration: 200
    });
    //   Invoke autoplay function
    autoplay();
    //   define autoplay fuction to change the carousel image automatically

  var sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);

  var parallax = document.querySelectorAll('.parallax');
  M.Parallax.init(parallax);

  var tabs = document.querySelectorAll('.tabs');
  M.Tabs.init(tabs);

  var modal = document.querySelectorAll('.modal');
  M.Modal.init(modal);
  
});


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
