import { forwardRef } from 'react';

const Footer = forwardRef<HTMLElement>((props, ref) => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 mt-auto" ref={ref}>
      <p>&copy; sjb0229@gmail.com. All rights reserved.</p>
    </footer>
  );
});

export default Footer; 