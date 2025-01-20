
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from "react-router";
// import './index.css'
// import App from './App.tsx'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Home from "./pages/Home/home";
import ContactUs from "./pages/Contact/contact-us";
import Formation from "./pages/Formations/formations";
import BeachTennis from "./pages/Formations/BeachTennis/beachTennis";
import Tennis from "./pages/Formations/LawnTennis/Tennis";
import Gallery from "./components/formation/gallery/gallery";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Formation" element={<Formation/>} />
        <Route path="/Formations/BeachTennis" element={<BeachTennis/>} />
        <Route path="/Formations/Tennis" element={<Tennis/>} />
        <Route path="/Nos_contacts" element={<ContactUs/>} />
        <Route path="/Galerie" element={<Gallery/>} />
      </Routes>
    </BrowserRouter>
  );
} else {
  console.error("Root element not found");
}


