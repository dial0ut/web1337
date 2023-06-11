import React, { useState } from 'react';
import logo from '../assets/2.png';

const Home: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <h1
        style={{
          color: isHovered ? 'black' : 'white',
          paddingBottom: '5rem',
          transition: 'color 1s ease, font-size 1s ease',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        ⱽᴾᴺ ˢᵒ ᵍᵒᵒᵈ ᔆⁿᵒʷᵈᵉⁿ ʷᵒᵘˡᵈⁿ'ᵗ ʰᵃᵛᵉ ᵍᵒᵗᵗᵉⁿ ᶜᵃᵘᵍʰᵗ
      </h1>
      <img
        src={logo}
        alt="Logo"
        style={{ width: '100%', maxWidth: '400px', paddingLeft: '25rem' }}
      />

    </>
  );
};

export default Home;
