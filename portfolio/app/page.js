'use client'
import About from "./components/About"; 
import Contact from "./components/Contact"; 
import Experience from "./components/Experience"; 
import Footer from "./components/Footer"; 
import Header from "./components/Header"; 
import Navbar from "./components/Navbar"; 
import Projects from "./components/Projects"; 
export default function Home() {
  return ( 
  <div className="bg-white text-black">
    <Navbar/> 
    <Header/> 
    <About/> 
    <Experience/> 
    <Projects/> 
    <Contact/> 
    <Footer/>
  </div> 
); 
}
