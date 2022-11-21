import React from 'react'

const Notification = () => {
  return (
    <>
    <div className='notificationBox'>
    <h1 style={{marginLeft:170}}>Notifications</h1>
    <br/>
    <div style={{height:60, width:600, backgroundColor:"whitesmoke"}}> <p style={{marginLeft:150}}>Order Id 2048 has been delivered</p>
    </div>
    <br/>
    <div style={{height:60, width:600, backgroundColor:"whitesmoke"}}> <p style={{marginLeft:150}}>USA has more number of orders.</p>
    </div>
    </div>
    </>
  )
}

export default Notification