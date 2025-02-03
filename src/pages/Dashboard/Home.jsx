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
    <div className="home">
      <img className='HomeImg' src="src/assets/images/ERP.svg" alt="ERP logo" />
    </div>
  );
};

export default Home;
