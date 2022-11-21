import React from 'react'
import Home1 from './Home1'



const Home = () => {
  return (
    <>
      <div className="mainbody">
      <h5 className='firstcomponent'>Earnings</h5><br/>
      <h4 className='firstprice'>$14,000000000000</h4>
      <button className="firstbutton">DOWNLOAD</button>
      <img className='firstimage'  src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5YJaxMhQYuujWtisIzf8A1kRsnyh9fldprg&usqp=CAU'} />
      </div>
      
      <Home1 />
       
      <div className='thirdcomponent'><h4>Revenue Updates</h4></div>
      <div className='thirdbackground'>
        <h3 className='thirdprice'>$93,438</h3>
        <div className='thirddiscount'>23%</div>
        <h5 className='thirdwriting'>Budget</h5>
        <h3 className='fourthprice'>$48,438</h3>
        <h5 className='fourthwriting'>Expense</h5>
        <button className='fourthbutton'>Download Report</button>
        <img  className="fouthimage" src="https://i0.wp.com/ieltspracticeonline.com/wp-content/uploads/2020/12/ielts-writing-task-1-line-chart-19-average-monthly-temperatures-three-cities.png?resize=1064%2C670&ssl=1"/>
        <img className='fifthImage' src="https://cdn1.byjus.com/wp-content/uploads/2016/01/123.png" />
      </div>
    </>
  )
}

export default Home;