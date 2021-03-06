import { useState, useEffect } from "react";
import Head from "next/head";
import EasyToUseSection from "../Components/EasyToUseSection";
import ExamplesSection from "../Components/ExamplesSection";
import Footer from "../Components/Footer";
import GetInTouch from "../Components/GetInTouch";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import OurTrustedClients from "../Components/OurTrustedClients";
import Services from "../Components/Services";
import WhatClientsSay from "../Components/WhatClientsSay";
import ModalMenu from "../Components/ModalMenu";
import Bubbles from "../Components/Bubbles";
import ModalContact from "../Components/ModalContact";
import AboutUs from "../Components/AboutUs";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const handleScroll = (e) => {
    if (e.target.scrollingElement.scrollTop < 10) setScrolled(false);
    if (e.target.scrollingElement.scrollTop >= 10) setScrolled(true);
  };

  useEffect(() => {
    window && window.addEventListener("scroll", handleScroll);

    return () => {
      window && window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative w-full overflow-x-hidden">
      <Head>
        <title>Apped NZ</title>
        <meta name="description" content="App Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Bubbles />
      <Header showMenu={showMenu} setShowMenu={setShowMenu} scrolled={scrolled} />
      <ModalContact showForm={showForm} setShowForm={setShowForm} />
      <ModalMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      <div id="top" className="relative pt-[100px] overflow-hidden">
        <img
          className="top-0 left-0 absolute w-full h-full object-cover z-0 pointer-events-none"
          src="/assets/waves-pattern.png"
          alt="pattern"
        />

        <HeroSection setShowForm={setShowForm} />
        <AboutUs />
      </div>
      <Services />
      <ExamplesSection setShowForm={setShowForm} />
      <EasyToUseSection />
      <OurTrustedClients />
      {/* <WhatClientsSay /> */}
      <div className="relative">
        <div className="gradient-bottom w-full h-1/2 absolute top-0 left-0 z-[1];"></div>
        <img
          className="top-0 left-0 absolute w-full h-full object-cover z-0 pointer-events-none transform rotate-180"
          src="/assets/waves-pattern.png"
          alt="pattern"
        />
        <GetInTouch />
        <Footer />
      </div>
    </div>
  );
}
