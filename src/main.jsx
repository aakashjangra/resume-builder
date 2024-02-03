import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Resume from './components/Resume/index.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store/store.js'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>
    }, 
    {
      path: '/resume',
      element: <Resume />
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </Provider>
  </React.StrictMode>,
)
