// Routes and Route let us map URLs to page components
import { Routes, Route } from 'react-router-dom'

// We'll build these pages one by one — for now they're placeholders
// Each page will be in client/src/pages/

function Home() { return <h1>Daino — Home Feed</h1> }
function Login() { return <h1>Login</h1> }
function Register() { return <h1>Register</h1> }
function AddMemory() { return <h1>Add a Memory</h1> }
function MemoryDetail() { return <h1>Memory Detail</h1> }
function TripView() { return <h1>Trip View</h1> }
function MapView() { return <h1>Map View</h1> }
function Wishlist() { return <h1>Wishlist</h1> }
function YearReview() { return <h1>Year in Review</h1> }
function Profile() { return <h1>Profile</h1> }

// Each Route maps a URL path to a component
function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add" element={<AddMemory />} />
            <Route path="/memory/:id" element={<MemoryDetail />} />
            <Route path="/trip/:id" element={<TripView />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/year-review" element={<YearReview />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}

export default AppRoutes