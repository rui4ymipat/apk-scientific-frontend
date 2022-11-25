import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import AdminLogin from "./pages/AdminLogin";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Header from "./components/Header";
import Footer from "./components/Footer";
// Import Swiper styles
// import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./assets/css/custom.css";
import "./assets/css/responsive.css";
import Category from "./pages/Category";
import Basket from "./components/Basket";
import Product from "./pages/Product";

const firebaseConfig = {
  apiKey: "AIzaSyDWTVbq_cSmk6Tol9xcVofQm3FhhyZL80k",
  authDomain: "apk-scientific.firebaseapp.com",
  projectId: "apk-scientific",
  storageBucket: "apk-scientific.appspot.com",
  messagingSenderId: "54892122959",
  appId: "1:54892122959:web:eba41f298d77fd0c29ab3a",
  measurementId: "G-5RJJZEW11B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return (
    <Router>
      {/* Header */}
      {/* <Header /> */}

      {/* Navbar menu */}
      <Navbar />

      {/* basket products */}
      <Basket />

      {/* content */}
      <Routes>
        <Route exact path="/" element={<Home app={app} />} />
        <Route path="/category" element={<Category app={app} />} />
        <Route path="/product/:id" element={<Product app={app} />} />
        <Route path="/admin" element={<Admin app={app} />} />
        <Route path="/admin-login" element={<AdminLogin app={app} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* footer */}
      <Footer />
    </Router>
  );
}

export default App;
