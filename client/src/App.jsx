import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes.jsx'

// Import the Navbar component
import Navbar from './components/layout/Navbar.jsx'

function App() {
  return (
    <BrowserRouter>
      {/* Navbar appears on every single page */}
      <Navbar />

      {/* Page content changes based on the URL */}
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App