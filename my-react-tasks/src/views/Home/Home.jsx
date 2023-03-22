import React from 'react'
import Header from '../../components/Layouts/Header/Header';
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Layouts/Footer/Footer';
import Content from '../../components/Content';

function Home() {
  return (
    <div>
        <Header/>
          <Banner/>
          <Content />
        <Footer/>
    </div>
  )
}

export default Home