import { StrictMode } from 'react'
import {Provider} from "react-redux"
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import counterReducer from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={counterReducer}>
      <App />
    </Provider>
   
  </StrictMode>,
)
