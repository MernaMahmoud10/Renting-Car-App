import React from 'react'
import Header from './components/Header/Header'
import CarsSection from './components/CarsSection/CarsSection'
import RentSection from './components/RentSection/RentSection'
import CarsLogoSlider from './components/CarsLogoSlider/CarsLogoSlider'
import WhyChoose from './components/WhyChoose/WhyChoose'
import Review from './components/Review/Review'
import DownloadApp from './components/DownloadApp/DownloadApp'
import Footer from './components/Footer/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <CarsSection />
            <RentSection />
            <CarsLogoSlider />
            <WhyChoose />
            <Review />
            <DownloadApp />
            <Footer />
        </>
    )
}

