import zIndex from '@mui/material/styles/zIndex';
import React from 'react'

const TranslucentMessage = () => {
  const translucentStyle = {
    zIndex: '10',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black background with 50% opacity
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    opacity: 0.5, // 50% opacity for the text as well
  };

  return (
    <div style={translucentStyle}>
      <center>Please lie down as shown in the instruction video to perform this exercise</center>
    </div>
  )
}

export default TranslucentMessage;

