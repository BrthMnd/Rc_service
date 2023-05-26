
import ReactDOM from 'react-dom/client'
import App from './Components/templates/Header'
// import Footer from './Components/templates/Footer.jsx'
// style
import './assets/style/index.css'
// Config 
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
