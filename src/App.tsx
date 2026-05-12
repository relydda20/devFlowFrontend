import { Route, Routes } from 'react-router-dom'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { LandingRoute } from '@/components/auth/LandingRoute'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { PublicRoute } from '@/components/auth/PublicRoute'
import { ScrollToTop } from '@/components/utils/ScrollToTop'
import { AuthProvider } from '@/lib/auth'
import { Dashboard } from '@/pages/Dashboard'
import { Docs } from '@/pages/Docs'
import { ExtensionPair } from '@/pages/ExtensionPair'
import { Landing } from '@/pages/Landing'
import { Login } from '@/pages/Login'
import { Register } from '@/pages/Register'
import { PrivacyPolicy } from '@/pages/PrivacyPolicy'
import { TermsOfService } from '@/pages/TermsOfService'
import { NotFound } from '@/pages/NotFound'
import './App.css'

function App() {

  return (
    <AuthProvider>
    <div className="flex min-h-screen flex-col bg-[#0E1322] text-slate-300">
      <Navbar />
      <div className="flex-1">
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <LandingRoute>
                <Landing />
              </LandingRoute>
            }
          />
          <Route path="/docs" element={<Docs />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/extension/pair"
            element={
              <ProtectedRoute>
                <ExtensionPair />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
    </AuthProvider>
  )
}

export default App
