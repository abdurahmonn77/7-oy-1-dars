import React, { useEffect } from 'react'; 

const Home = () => {
  useEffect(() => {
    const img = document.querySelector('img');

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const offsetX = (clientX - window.innerWidth / 2) * 0.05;
      const offsetY = (clientY - window.innerHeight / 2) * 0.05;

      img.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="flex items-start justify-center relative">
      <h1 className='text-[70px] font-extrabold text-slate-400'>C<span className='span-text'>O</span>MI<span className='span-second'>N</span>G S<span className='span-text'>OO</span><span className='span-second'>N</span>...</h1>
      <img className='HomeImg absolute top-[150px]' src="src/assets/images/ERP.svg" alt="ERP logo" />
      <strong className='absolute top-[600px]'>Not coming soon tbh*</strong>
    </div>
  );
};

export default Home;
