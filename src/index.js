import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';
import HelloComponent from './component/HelloComponent';
import StateFullComponent from './component/StateFullComponent';
import ListImage from './component/ListImage';
import Test from './container/Test';
import Footer from './component/Footer';
import Login from './Login';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// const HelloComponent() => {
//   return HelloComponent
// }

// class StateFullComponent extends React.Component {
//   render() {
//     return <p>State Full Component</p>
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Login />, document.getElementById("root"));
// ReactDOM.render(<Test />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
