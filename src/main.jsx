import { createRoot } from 'react-dom/client';
import './index.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';

createRoot(document.getElementById('root')).render(
    <App />
)
