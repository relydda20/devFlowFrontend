import { Navigate, Route, Routes } from 'react-router-dom'

import { Navbar } from '@/components/layout/Navbar'
import { Dashboard } from '@/pages/Dashboard'
import { Docs } from '@/pages/Docs'
import { Landing } from '@/pages/Landing'
import { Login } from '@/pages/Login'
import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-[#0a0c14] text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
