import React from 'react'
import Layout from './Components/Layout'
import HomeSec1 from './Components/HomeSec1'
import HomeAbout from './Components/HomeAbout'
import HomeProduct from './Components/HomeProduct'
import HomeOffer from './Components/HomeOffer'
import HomeSpecialist from './Components/HomeSpecialist'
import HomePost from './Components/HomePost'
import HomeConnect from './Components/HomeConnect'
import HomeClient from './HomeClient'
import HomeBrand from './Components/HomeBrand'

const Home = () => {
  return (
    <Layout>
        {/* banner */}
        <HomeSec1/>
        {/* homeAbout sec */}
        <HomeAbout/>
        {/* homeproduct */}
        <HomeProduct/>
        {/* home offter */}
        <HomeOffer/>
        {/* home speacialist */}
        <HomeSpecialist/>
        {/* home post sec */}
        <HomePost/>
        {/* home connect */}
        <HomeConnect/>
        {/* HomeCient */}
        <HomeClient/>
        {/* Home Brand */}
        <HomeBrand/>
    </Layout>
  )
}

export default Home;