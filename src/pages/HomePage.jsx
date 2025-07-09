import React from 'react'
import HeroSection from '../components/HeroSection'
import ClinicalExcellence from '../components/ClinicalExcellence'
import WhyChooseUs from '../components/WhyChooseUs'
import ConfidenceSection from '../components/ConfidenceSection'
import InfiniteSlider from '../components/InfiniteSlider'
import TeamSection from '../components/TeamSection'
import BeforeAfterSection from '../components/BeforeAfterSection'
import StatsSection from '../components/StatsSection'
import PatientTestimonials from '../components/PatientTestimonials'
import ContactUs from '../components/ContactUs'
import LatestNews from '../components/LatestNews'
import LocationMap from '../components/LocationMap'

/**
 * HomePage Component
 * 
 * Main landing page that includes all the homepage components
 * that were previously in App.jsx
 */
function HomePage() {
    return (
        <>
            <HeroSection />
            <ClinicalExcellence />
            <WhyChooseUs />
            <ConfidenceSection />
            <InfiniteSlider />
            <TeamSection />
            <BeforeAfterSection />
            <StatsSection />
            <PatientTestimonials />
            <ContactUs />
            <LatestNews />
            <LocationMap />
        </>
    )
}

export default HomePage