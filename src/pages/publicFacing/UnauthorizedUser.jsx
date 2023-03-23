import React from 'react'

function Unauthorized() {
  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100'>
      <h3 style={{
        marginTop:"-100px"
      }}>
      You must log in to use this site.
      </h3>
    </div>
  )
}

export default Unauthorized