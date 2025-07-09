import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiChevronRight } from 'react-icons/hi'

/**
 * ServicesSidebar Component
 * 
 * A sidebar component displaying all dental services with navigation links
 * Highlights the current active service
 */
const ServicesSidebar = () => {
  const location = useLocation()
  
  // List of all dental services with their routes
  const services = [
    { name: 'ORAL SURGERY', path: '/services/oral-surgery' },
    { name: 'DENTAL IMPLANTS', path: '/services/dental-implants' },
    { name: 'CAVITY PREVENTION', path: '/services/cavity-prevention' },
    { name: 'SMILE ENHANCEMENT', path: '/services/smile-enhancement' },
    { name: 'WHITENING BOOST', path: '/services/whitening-boost' },
    { name: 'GUM CARE', path: '/services/gum-care' },
    { name: 'EMERGENCY DENTISTRY', path: '/services/emergency-dentistry' },
    { name: 'PEDIATRIC DENTISTRY', path: '/services/pediatric-dentistry' },
    { name: 'WISDOM TOOTH EXTRACTION', path: '/services/wisdom-tooth-extraction' },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full">
      <h2 
        className="text-center mb-6"
        style={{
          fontFamily: 'var(--cmsmasters-h2-font-family)',
          fontSize: 'var(--cmsmasters-h2-font-size)',
          lineHeight: 'var(--cmsmasters-h2-line-height)',
          fontWeight: 'var(--cmsmasters-h2-font-weight)',
          textTransform: 'var(--cmsmasters-h2-text-transform)',
          fontStyle: 'var(--cmsmasters-h2-font-style)',
          textDecoration: 'var(--cmsmasters-h2-text-decoration)',
          letterSpacing: 'var(--cmsmasters-h2-letter-spacing)',
          wordSpacing: 'var(--cmsmasters-h2-word-spacing)',
          color: 'var(--cmsmasters-colors-heading)'
        }}
      >
        Our Services
      </h2>
      
      <div className="space-y-4">
        {services.map((service) => {
          const isActive = location.pathname === service.path
          
          return (
            <Link
              key={service.path}
              to={service.path}
              className={`flex justify-between items-center py-2 px-1 border-b border-gray-100 hover:text-blue-500 transition-colors ${
                isActive ? 'text-blue-500' : ''
              }`}
            >
              <span className="font-medium">{service.name}</span>
              <HiChevronRight 
                className={`${isActive ? 'text-blue-500' : 'text-gray-400'}`} 
                size={20} 
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ServicesSidebar
