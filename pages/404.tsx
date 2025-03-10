import Link from 'next/link';
import { motion } from 'framer-motion';
import Meta from '../components/Meta';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-primary p-4">
      <Meta title="404 - Page Not Found | Achyut Mukund" />
      
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-6">Page Not Found</h2>
        <p className="mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link 
          href="/" 
          className="bg-primary text-background px-6 py-3 rounded hover:bg-opacity-90 transition-all"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
} 