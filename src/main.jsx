import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.module.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBCLBOLgZqEOMZjEyFurFf1jYiH_07C3pI",
  authDomain: "proyecto-final-arguello.firebaseapp.com",
  projectId: "proyecto-final-arguello",
  storageBucket: "proyecto-final-arguello.appspot.com",
  messagingSenderId: "975072446904",
  appId: "1:975072446904:web:2fc0708d993034e8b7a74d"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
