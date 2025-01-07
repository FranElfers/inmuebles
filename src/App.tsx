import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router'
import './App.css'
import MainGrid from './views/Start'
import Nav from './components/Nav'
import HomeView from './views/HomeView'
import PlacesView from './views/PlacesView'
import PlaceView from './views/PlaceView'
import React from 'react'
import Admin_JsonView from './views/Admin_JsonView'

const LogLocation: React.FC<React.PropsWithChildren> = ({ children }) => {
  const location = useLocation()

  React.useEffect(() => {
    console.log('[url]', location.pathname)
  }, [location])

  return <>{children}</>
}

function App() {
  return (
    <BrowserRouter>
      <LogLocation>
        <Routes>
          <Route element={<Nav />}>
            <Route index element={<HomeView />} />
            <Route path="places" element={<PlacesView />} />
            <Route path="place/:place" element={<PlaceView />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
          <Route path='admin' element={<MainGrid />} />
          <Route path='admin_json' element={<Admin_JsonView />} />
        </Routes>
      </LogLocation>
      {/* <UsersTable />
      <UploadUser /> */}
      {/* <PlacesTable /> */}
    </BrowserRouter>
  )
}

export default App
