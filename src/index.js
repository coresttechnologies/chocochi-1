import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const style = {
  width:"100vw",
  height:"100vh",
  display:"grid",
  placeItems:"center"
}

ReactDOM.render(
  <React.StrictMode>
  <h1 style={style}>Service unavailable!!</h1>
  { /*<App />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
