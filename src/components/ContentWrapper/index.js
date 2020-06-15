import React from 'react';



const ContentWrapper = ({ children, backgroundimage }) => {

  const style = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    flexGrow: '1',
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default ContentWrapper;