import { NextSeo } from 'next-seo';
import CustomDesign from '../comps/customDesign';
import Intro from '../comps/intro';
import MainBanner from '../comps/mainBanner';
import MainProducts from '../comps/mainProducts';
import MiniBanner from '../comps/miniBanner';
import styles from '../styles/index.module.css'

const Home = () => {
  return (
    <>
    <NextSeo title="Bag Rosa"/>
    <MainBanner/>
    <Intro/>
    <MiniBanner/>
    <MainProducts/>
    <CustomDesign/>
    </>
  )
}

export default Home;