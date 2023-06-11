import React, { useState } from 'react';

const GetWhitelisted: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailAdded, setEmailAdded] = useState(false);

  const handleEmailSubmit = () => {
   
    setEmailAdded(true);
  };

  return (
    <div style={{  paddingBottom: '35rem', paddingTop:'1rem' }}>
      <h1 >Get Whitelisted Page</h1>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginRight: '1rem', padding: '0.6em 1.2em', fontSize: '1em', fontWeight: 500, fontFamily: 'inherit', borderRadius: '5px',
          border: '1px solid', }}
        />
        <button
          onClick={handleEmailSubmit}
          style={{
            borderRadius: '5px',
            border: '1px solid',
            padding: '0.6em 1.2em',
            fontSize: '1em',
            fontWeight: 500,
            fontFamily: 'inherit',
            backgroundColor: '#ffffff',
            cursor: 'pointer',
            transition: 'border-color 0.25s',
          }}
        >
          Submit
        </button>
      </div>

      {emailAdded && <p>Email added successfully!</p>}
    </div>
  );
};

export default GetWhitelisted;
