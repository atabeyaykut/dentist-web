import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import fonts for our dental website
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'

createRoot(document.getElementById('root')).render(<App />)
