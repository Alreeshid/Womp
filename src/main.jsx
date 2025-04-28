import { StrictMode } from 'react'
import { createRoot} from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './pages/Layout.jsx'
import Login from './pages/Login.jsx'
import AdminPanel from './pages/adminPages/AdminLanding.jsx'
import DemoNav from './pages/DemoNav.jsx'
import Profile from './pages/Profile.jsx'
import Support from './pages/Support.jsx'
import Review from './pages/Review.jsx'
import Electronics from './pages/Electronics.jsx'
import Jewelery from './pages/Jewelery.jsx'
import Clothing from './pages/Clothing.jsx'
import CreateListing from "./pages/CreateListing.jsx"
import ProductDetails from './components/ProductDetails.jsx';
import CheckoutPage from "./pages/CheckoutPage.jsx"


import { generateClient } from 'aws-amplify/data';

/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */
const client = generateClient();

// Now you should be able to make CRUDL operations with the
// Data client

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
          <Route path="Profile" element={<Profile />} />
          <Route index element={<DemoNav />} />
          <Route path="login" element={<Login />} />
          <Route path="Admin/Landing" element = {<AdminPanel />} />
          <Route path="Demo1" element={<App />} />
          <Route path= "Support" element={<Support />} />
          <Route path= "Review" element={<Review />} />
          <Route path= "Clothing" element={<Clothing />} />
          <Route path= "Electronics" element={<Electronics />} />
          <Route path= "Jewelery" element={<Jewelery />} />
          <Route path= "CreateListing" element={<CreateListing />} />
          <Route path= "Checkout" element={<CheckoutPage />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
