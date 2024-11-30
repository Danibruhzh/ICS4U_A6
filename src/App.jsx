import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
// import Hero from './components/Hero'
// import Feature from './components/Feature'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Genre from './components/Genre'
import GenreView from './views/GenreView'
import DetailView from './views/DetailView'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'
import HomeView from './views/HomeView'
import MoviesView from './views/MoviesView'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/movies" element={<MoviesView />}>
          <Route path=":genre_id" element={<GenreView />} />
          <Route path=":id" element={<DetailView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
