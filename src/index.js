import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Notfound from './pages/Notfound';
import Qna from './pages/Qna';
import Search from './pages/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        errorElement : <Notfound/>,

        children : [
            {path : '/board/qna', element : <Qna/>},
            {path : '/search', element : <Search/>},
        ]
    }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
