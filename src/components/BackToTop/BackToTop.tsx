import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsSticky(true);
        document.querySelector('#backTop')?.classList.remove('hidding');
      } else {
        setIsSticky(false);
        document.querySelector('#backTop')?.classList.add('hidding');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id='backTop' className={`fixed left-4 bottom-5 md:bottom-5 z-40 ${isSticky ? '' : 'hidding'}`}>
      <button
        className='flex justify-center items-center rounded-full py-2 px-2 bg-[#fff800]  shadow-[0px_0px_5px_#0062ff]'
        onClick={handleBackToTop}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" className='text-black' strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
      </button>
    </div>
  );
}
