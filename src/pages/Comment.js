import React from 'react'

const Comment = () => {
  return (
    <>
    <div className='commentBox'>
    <h1 style={{marginLeft:200}}>Chat Box</h1>
    <div style={{height:60, width:600, backgroundColor:"whitesmoke"}}> <h5>Michael</h5> <p>Hi! Good Morning</p>
    </div>
    <br/>
    <div style={{height:60, width:600, backgroundColor:"whitesmoke"}}> <h5>Hazel</h5> <p>Can you please place my order?</p>
    </div>
    <br/>
    <div style={{height:60, width:600, backgroundColor:"whitesmoke"}}> <h5>Jack</h5> <p>Hey, Where I have to deliver the parcel today?</p>
    </div>
   

    </div>
    </>
  )
}

export default Comment