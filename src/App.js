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
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

export default function HotelPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">HotelStay</h1>
        <Button>Login</Button>
      </header>

      <section className="bg-blue-100 py-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Find your perfect stay</h2>
        <p className="text-gray-600">Explore top-rated hotels and resorts in India</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {hotels.map((hotel, index) => (
          <Card key={index} className="shadow-md rounded-2xl">
            <img src={hotel.image} alt={hotel.name} className="rounded-t-2xl h-48 w-full object-cover" />
            <CardContent className="space-y-2 p-4">
              <h3 className="text-xl font-semibold">{hotel.name}</h3>
              <p className="text-sm text-gray-500">{hotel.location}</p>
              <p className="text-lg font-medium text-green-600">{hotel.price}</p>
              <Button className="w-full">Book Now</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="bg-white text-center py-4 text-sm text-gray-500 border-t">
        © 2025 HotelStay. All rights reserved.
      </footer>
    </div>
  );
}
