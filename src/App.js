import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar/Navbar";
import Head from "./components/head/Head";
import Services from "./components/service/Services";
import Team from "./components/team/Team";
import DevMobile from "./components/mobile/DevMobile";
import ErpSystem from "./components/erpSystem/ErpSystem";
import Designs from "./components/design/Designs";
import Optimisation from "./components/optimisation/Optimisation";
import Consulting from "./components/consulting/Consulting";
import Client from "./components/client/Client";
import Tools from "./components/tools/Tools";
import Delever from "./components/deliver/Delever";
import Sms from "./components/sms/Sms";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import AppFooter from "./components/footer/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <Head />
        <Services />
        <Team />
        <DevMobile />
        <ErpSystem />
        <Designs />
        <Optimisation />
        <Consulting />
        <Tools />
        <Client />
        <Delever />
        <Sms />
        <Work />
        <Contact />
        <AppFooter />
      </div>
    </>
  );
}

export default App;
