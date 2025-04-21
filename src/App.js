// import './App.css';
// import Layout from './components/layout';
// import Home from './pages/home';
// import Detail from './pages/detail';
// import CartTab from './components/cartTab'; // Import CartTab
// import Checkout from './components/checkout'; // Import Checkout
// import Razorpay from './components/razorpay'; // Import Razorpay component
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';


// import Main from './components/Main';
// import Login from './components/Login';
// import SignUp from './components/Signup';
// import About from './components/About';
// import PaymentSuccess from './components/paysuccess';
// import CookieConsent from './components/cookie'; // Import CookieConsent

// const App = () => {
//   return (
//     <HashRouter>
//       <CookieConsent /> {/* Add CookieConsent here */}
//       <Routes>
//         {/* Directly render the Main component at the root path */}
//         <Route path='/' element={<Main />} />

//         {/* Other routes wrapped in the Layout component */}
//         <Route path='/home' element={<Layout />}> {/* Layout route */}
//           <Route index element={<Home />} />
//         </Route>
//         <Route path=':slug' element={<Detail />} />
//         <Route path='/cart' element={<CartTab />} />
//         <Route path='/checkout' element={<Checkout />} />
//         <Route path='/razorpay' element={<Razorpay />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/signup' element={<SignUp />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/details' element={<Detail />} />
//         <Route path="/payment-success" element={<PaymentSuccess />} />

//         {/* Redirect from old '/main' path to the new root path */}
//         <Route path='/main' element={<Navigate to="/" />} />
//       </Routes>
//     </HashRouter>
//   );
// };

// export default App;


// app/pages/HotelPage.jsx or app/page.tsx if you're using Next.js with App Router
import React from "react";

function App() {
  const hotels = [
    {
      name: "The Grand Royal",
      location: "Mumbai, India",
      price: "₹5,500/night",
      image: "https://source.unsplash.com/featured/?hotel",
    },
    {
      name: "Ocean Breeze Resort",
      location: "Goa, India",
      price: "₹4,200/night",
      image: "https://source.unsplash.com/featured/?resort",
    },
    {
      name: "Mountain View Stay",
      location: "Manali, India",
      price: "₹3,800/night",
      image: "https://source.unsplash.com/featured/?mountain,hotel",
    },
  ];

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 text-center text-2xl font-bold">
        Hotel Booking
      </header>

      {/* Hero Section */}
      <section className="bg-blue-100 py-10 text-center">
        <h2 className="text-3xl font-semibold mb-2">Find Your Dream Stay</h2>
        <p className="text-gray-600">Explore top hotels across India</p>
      </section>

      {/* Hotel Listings */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {hotels.map((hotel, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden">
            <img src={hotel.image} alt={hotel.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{hotel.name}</h3>
              <p className="text-gray-600">{hotel.location}</p>
              <p className="text-green-600 font-semibold">{hotel.price}</p>
              <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4 border-t">
        © 2025 HotelStay. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
