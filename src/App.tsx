import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import './App.css'
import MainGrid from './views/Start'
import Nav from './components/Nav'
import HomeView from './views/HomeView'
import PlacesView from './views/PlacesView'
import PlaceView from './views/PlaceView'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Nav />}>
          <Route index element={<HomeView />} />
          <Route path="places" element={<PlacesView />} />
          <Route path="place/:place" element={<PlaceView />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path='admin' element={<MainGrid />} />
      </Routes>
      {/* <UsersTable />
      <UploadUser /> */}
      {/* <PlacesTable /> */}
    </BrowserRouter>
  )
}

export default App
