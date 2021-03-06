import React from 'react';
function Header() {
  return (
    <div className="header">
      <header style= {headerStyle}>
      <h1> Productivity app</h1>
      <p>A convenient way to measure your time</p>
      </header>
    </div>
  )
}

const headerStyle = {
  alignItems: "center",
  overflow:"hidden",
  background: 'rgb(3, 219, 136)',
  color: 'white',
  textAlign: 'center',
  padding: '10px',
  fontFamily:"consolas"
}

export default Header;
