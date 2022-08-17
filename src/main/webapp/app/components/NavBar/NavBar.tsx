import React from 'react';
import './styles.css';

export default function Navbar() {
  const handleClick = () => {
    return (
      <img>
        src="https://www.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTkxMTM0NTI5OTE2NzczNzQy/matthew-tkachuk.jpg"
        width="400"
      </img>
    );
  };
  return (
    <nav className="nav-bar">
      <button>Home</button>
      <button>Fun Facts</button>
      <button onClick={handleClick}>Iconic Images</button>
      <button>Sports Legends</button>
    </nav>
  );
}
