import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Cookies from "js-cookie"
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const jwtToken=Cookies.get('jwtToken');
const App = () => (
  <BrowserRouter>
    <Routes>
      {/* Public route */}
      <Route path="/login" element={<LoginForm />} />

      {/* Protected routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      {/* Not found route */}
      <Route path="/not-found" element={<NotFound />} />

      {/* Catch-all redirect */}
      <Route path="*" element={jwtToken===undefined?<Navigate to="/login" replace />:<Navigate to="/not-found" replace />} />
    </Routes>
  </BrowserRouter>
)

export default App
