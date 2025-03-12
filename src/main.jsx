import { StrictMode } from 'react'
import { createRoot} from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './pages/Layout.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/profile.jsx'
//import * as Pages from './pages'
//to reference a page, use <Pages.page> - I.E. <Pages.login>

//<App />

/*
Notes for how the Router works.
BrowserRouter is the parent component, which can take multiple Routes components
Each Route (singular) is a child added on to the parent.
In the below Example, clicking a link to the different pages will set the Layout component at the top, with
  each sub page underneath it physicallys
*/ 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<App />} />
          <Route path="login" element={<Login />} />
          <Route path="Profile" element={<Profile />} />
          
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
