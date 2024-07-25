import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore.js'
import Store from './redux/Store.js'

const persistor = persistStore(Store);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
    <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
)
