import React, { useState } from 'react'


const Home1= (props)  =>{
  const[apiData, setdata] = useState([
    { 
        id:1,
        image:"https://w7.pngwing.com/pngs/244/235/png-transparent-technical-support-customer-service-computer-icons-call-centre-baik.png",
        price:"39,354",
        discount:"-4%",
        name:"Customers"

    },
    {
        id:2,
        image:"https://img.freepik.com/premium-photo/3d-illustration-3-blue-cubes-lie-top-each-other_657985-7.jpg?w=2000",
        price:"9,354",
        discount:"+23%",
        name:"Products"

    },
    {
        id:3,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXnwl70jGnxBywiJDMGDhIB4lULkufQRVt5wbCY92TQzaGDU0__ywusNfe7vTAhMpXnc&usqp=CAU",
        price:"89,354",
        discount:"+38%" ,
        name:"Sales"

    },
    {
        id:4,
        image:"https://cdn-icons-png.flaticon.com/512/49/49172.png",
        price:"39,354",
        discount:"-4%" ,
        name:"Refunds"

    }
     
]
)
  console.log('props', props)
    return(
      <>
   <div className="secondmainbody">
    {apiData.map((currEle,index)=>{
      return(
      <>
      <span className='secondcomponent' id={'id'+index} key={index}>
        <h3 className='secondprice'>{currEle.price}</h3>
        <h6 className='firstdiscount' >{currEle.discount}</h6>
        <h5 className='secondname'>{currEle.name}</h5>
        <img className='secondimage' src={currEle.image}/>
        {/* <br/><br/> */}
      </span>

      </>)
    })}
    
    
    </div> 
  </>
  
    )
}

export default Home1;