import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router'
import './App.css'
import Nav from './components/Nav'
import HomeView from './views/HomeView'
import PlacesView from './views/PlacesView'
import PlaceView from './views/PlaceView'
import { useEffect, FC, PropsWithChildren } from 'react'
import Admin_JsonView from './views/Admin_JsonView'
import Admin_Index from './views/Admin_Index'
import Admin_Database from './views/Admin_Database'
import Admin_Structure from './views/Admin_Structure'
import { adminSideBarLinks, clientSideBarLinks } from './configs'
import Admin_PlaceDetail from './views/Admin_Detail'
import Dashboard from './dashboard/Dashboard'

const LogLocation: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    console.log('[url]', location.pathname)
  }, [location])

  return <>{children}</>
}

function App() {
  return (
    <BrowserRouter>
      <LogLocation>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route element={<Nav links={clientSideBarLinks} />}>
            <Route index element={<HomeView />} />
            <Route path="places" element={<PlacesView />} />
            <Route path="place/:place" element={<PlaceView />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
          <Route element={<Nav links={adminSideBarLinks} />}>
            <Route path='admin' element={<Admin_Index />} />
            <Route path='admin/db' element={<Admin_Database />} />
            <Route path='admin/db/users' element={<Admin_Structure collectionName='users' />} />
            <Route path='admin/db/places' element={<Admin_Structure collectionName='places' />} />
            <Route path='admin/db/place/:place' element={<Admin_PlaceDetail />} />
            <Route path='admin_json' element={<Admin_JsonView />} />
          </Route>
        </Routes>
      </LogLocation>
      {/* <UsersTable />
      <UploadUser /> */}
      {/* <PlacesTable /> */}
    </BrowserRouter>
  )
}

export default App
