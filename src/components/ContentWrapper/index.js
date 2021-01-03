import React from 'react';



const ContentWrapper = ({ children, backgroundimage }) => {

  const style = {
    // backgroundImage: `url(${backgroundimage})`,
    // backgroundRepeat: 'repeat',
    // backgroundPosition: 'center',
    flexGrow: '1',
  }
  
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default ContentWrapper;

let grid = new Map(
  Array.from({ length: 7 })
    .map(
      (_, i) => [(i + 10).toString(36), Array.from({ length: 6 })]
    )
)