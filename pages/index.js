import { NextSeo } from 'next-seo';
import AboutUs from '../comps/aboutUs';
import Contact from '../comps/contact';
import CustomDesign from '../comps/customDesign';
import Footer from '../comps/footer';
import Intro from '../comps/intro';
import KeyPoints from '../comps/keyPoints';
import MainBanner from '../comps/mainBanner';
import MainProducts from '../comps/mainProducts';
import MiniBanner from '../comps/miniBanner';
import OurClients from '../comps/ourClients';
import Shipping from '../comps/shipping';
import WpFloatButton from '../comps/wpFloatButton';

const Home = () => {
  return (
    <>
    <NextSeo title="Bag Rosa"/>
    <WpFloatButton/>
    <MainBanner/>
    <Intro/>
    <MiniBanner/>
    <MainProducts/>
    <CustomDesign/>
    <AboutUs/>
    <Shipping/>
    <KeyPoints/>
    <Contact/>
    <OurClients/>
    <Footer/>
    </>
  )
}

export default Home;