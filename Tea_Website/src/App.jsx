import './App.css'
import Header from './Components/Header'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ShoppingPage from './Pages/ShoppingPage';
import LocationsPage from './Pages/LocationsPage';
import AboutUsPage from './Pages/AboutUsPage';

function App() {

  return (
    <>
      

      <BrowserRouter>
          <Header />
        <Routes>
          
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/shop" element={<ShoppingPage />}></Route>
          <Route path="/locations" element={<LocationsPage />}></Route>
          <Route path="/aboutUs" element={<AboutUsPage />}></Route>

        </Routes>
      </BrowserRouter>

    </>
  )

}

export default App
