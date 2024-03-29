import React from 'react';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

function Signout() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '30vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <p>Click the button below to logout!</p>
      <Button type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}

export default Signout;
