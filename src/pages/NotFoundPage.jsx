import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="mb-8 text-primary-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
              <circle cx="12" cy="12" r="10" />
              <path d="m15 9-6 6" />
              <path d="m9 9 6 6" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Link to="/" className="btn btn-primary px-8 py-3">
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFoundPage
