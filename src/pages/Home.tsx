import React, { useState } from 'react';


const Home: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
    <h1
        style={{
          fontSize: '10rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: '0',
          marginLeft:'35rem',
          paddingBottom:'12rem',
          paddingTop: '0.2rem',
          color: 'white',
        }}
      >
        DIAL 0UT
      </h1>
      <h1
        style={{
          color: isHovered ? 'white' : 'black',
          paddingBottom: '8rem',
          transition: 'color 1s ease, font-size 10s ease',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        𝚅𝚙𝚗 𝚜𝚘 𝚐𝚘𝚘𝚍 𝚂𝚗𝚘𝚠𝚍𝚎𝚗 𝚠𝚘𝚞𝚕𝚍𝚗'𝚝 𝚑𝚊𝚟𝚎 𝚐𝚘𝚝𝚝𝚎𝚗 𝚌𝚊𝚞𝚐𝚑𝚝
      </h1>
  
    <footer className="flex space-x-4 bg-white rounded-lg shadow m-4 dark:bg-black border-2 border-white">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://dialout.net/" className="hover:underline">
          𝙳𝚒𝚊𝚕𝚘𝚞𝚝 𝙸𝚗𝚌
          </a>
          <span/>
          . 𝙰𝚕𝚕 𝚛𝚒𝚐𝚑𝚝𝚜 𝚛𝚎𝚜𝚎𝚛𝚟𝚎𝚍
        </span>
       
      </div>
    </footer>


    </>
  );
};

export default Home;
