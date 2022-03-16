import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';

import BlogPost from './container/BlogPost/BlogPost';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<BlogPost />, document.getElementById("content"));

reportWebVitals();
