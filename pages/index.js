import { NextSeo } from 'next-seo';
import Intro from '../comps/intro';
import MainBanner from '../comps/mainBanner';
import MiniBanner from '../comps/miniBanner';
import styles from '../styles/index.module.css'

const Home = () => {
  return (
    <>
    <NextSeo title="Bag Rosa"/>
    <MainBanner/>
    <Intro/>
    <MiniBanner/>
    </>
  )
}

export default Home;