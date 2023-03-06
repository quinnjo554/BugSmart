import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
<<<<<<< HEAD
   
=======
    domain=""
    clientId=""
>>>>>>> 0cac37d107d86efdd124f95cbf77eb18ba4c36ea
    
    authorizationParams={{
      redirect_uri: "http://localhost:5173/MainPage"
    }}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>,
)
