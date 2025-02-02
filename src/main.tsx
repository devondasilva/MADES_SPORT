
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from "react-router";
// import './index.css'
// import App from './App.tsx'

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/home";
import ContactUs from "./pages/Contact/contact-us";
import Formation from "./pages/Formations/formations";
import BeachTennis from "./pages/Formations/BeachTennis/beachTennis";
import PadelSport from "./pages/Formations/PadelSport/padelSport";
import Squash from "./pages/Formations/Squash/Squash";
import Tennis from "./pages/Formations/LawnTennis/Tennis";
import Gallery from "./components/formation/gallery/gallery";
import AboutUs from "./pages/AboutUs/aboutUs";
import Dossier from "./pages/Dossier";
import Articles from "./pages/Article";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Formation" element={<Formation/>} />
        <Route path="/Formation/BeachTennis" Component={BeachTennis} />
        <Route path="/Formation/Padel" Component={PadelSport} />
        <Route path="/Formation/Squash" Component={Squash} />
        <Route path="/A_propos" Component={AboutUs} />
        <Route path="/Formation/Tennis" element={<Tennis/>} />
        <Route path="/Nos_contacts" element={<ContactUs/>} />
        <Route path="/Galerie" element={<Gallery/>} />
        <Route path="/Dossier" element={<Dossier/>} />
        <Route path="/Article" element={<Articles/>} />
      </Routes>
    </Router>
  );
} else {
  console.error("Root element not found");
}


