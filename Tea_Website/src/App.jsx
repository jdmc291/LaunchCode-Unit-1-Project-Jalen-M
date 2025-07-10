import './App.css'
import Header from './Components/Header'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';

function App() {

  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )

}

export default App
