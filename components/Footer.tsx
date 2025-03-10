import { useState, useEffect } from 'react';

const Footer = () => {
  const [year, setYear] = useState('2024'); // Start with a default year

  useEffect(() => {
    // Update the year client-side only
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="w-full py-4 text-center text-sm text-gray-400">
      © {year} Achyut Mukund
    </footer>
  );
};

export default Footer; 