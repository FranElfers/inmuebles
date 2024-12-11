import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import MainGrid from './views/Start'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainGrid />} />
        {/* <Route path='admin' element={<MainGrid />} /> */}
      </Routes>
      {/* <UsersTable />
      <UploadUser /> */}
      {/* <PlacesTable /> */}
    </BrowserRouter>
  )
}

export default App
