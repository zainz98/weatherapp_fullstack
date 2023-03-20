import { Route , Routes } from 'react-router-dom'
import Weather from './pages/Weather'
import WeatherHome from './pages/weatherHome'
import WeatherSearch from './pages/WeatherSearch'
import './App.css';
import MainLayout from './layouts/MainLayout'

function App() {
  
  return (
    <div className="App">
      <MainLayout>
      <Routes>
        <Route path='/' element={<WeatherHome />}></Route>
        <Route path='/WeatherSearch' element={<WeatherSearch />}></Route>
        <Route path='/Weather' element={<Weather />}></Route>
      </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
