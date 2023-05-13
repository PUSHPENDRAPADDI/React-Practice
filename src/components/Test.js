import React from 'react';
import "./Video.css"

function Test() {
  const handlePrintClick = () => {
    window.print();
  };

  return (
    <div className='arrow-pointer'>
      My Arrow Div
    </div>
    // <button onClick={handlePrintClick}>
    //   Print PDF
    // </button>
  );
}

export default Test;
