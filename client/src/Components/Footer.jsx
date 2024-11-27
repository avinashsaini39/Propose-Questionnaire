import { useMemo } from 'react';

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="text-center py-2 bg-pink-200 text-pink-800 text-sm font-medium">
      © {currentYear}. Made with/for ❤️ by{' '}
      {/* <a
        href="https://portfolio.avitrends.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 hover:underline"
      >
        CreativeAvi
      </a> */}
      <a className="text-pink-600">CreativeAvi</a>
    </footer>
  );
};

export default Footer;
