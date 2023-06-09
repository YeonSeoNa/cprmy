import React, {useState} from 'react';
import {Route, Routes}  from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import MapMarker from './pages/MapMarker'
import About from './pages/About'
import News from './pages/News'
import Product from './pages/Product'
import Store from './pages/Store';
import Login from './pages/Login';
import Join from './pages/Join';
import { AirContext } from './context/AirContext'


const App = () => {

  const [active, setActive] = useState(0)

  return (
    <AirContext.Provider value={{active, setActive}}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/news" element={<News />} />
          <Route path="/mapmaker" element={<MapMarker />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Route>
      </Routes>
    </AirContext.Provider>
  );
};

export default App;