import React from 'react'

const Cart = () => {
  const order_data=[
    {item:"Fresh Tomato",customername:"Vineet",amount:"$30.8",status:"Active",id:10248,location:"USA"},
    {item:"Butter Scotch",customername:"Priya",amount:"$50",status:"Pending",id:10245,location:"Russia"},
    {item:"Candy",customername:"Rohan",amount:"$2",status:"Active",id:10246,location:"Italy"},
    {item:"Night Lamp",customername:"Kylie",amount:"$200",status:"Pending",id:10242,location:"Rome"},
    {item:"Makeup Brush",customername:"Jenifer",amount:"$85",status:"Active",id:10241,location:"Europe"},
    {item:"Cup",customername:"John",amount:"$178",status:"Pending",id:10243,location:"Toronto"},
    {item:"Chocolates",customername:"Susan",amount:"$4",status:"Active",id:10244,location:"Canada"},
    {item:"Sling Bags",customername:"Deepak",amount:"$250",status:"Pending",id:10250,location:"Netherland"},
    {item:"Necklace",customername:"Hazel",amount:"$100",status:"Active",id:10249,location:"California"},
    {item:"Cold creams",customername:"Gagan",amount:"$190",status:"Pending",id:10247,location:"India"}
    
  ]
  return (
    <>
     <div className='container_order'>
     <table style={{cellSpacing:"3"}}>
       <thead>
         <tr>
           <th>Item</th>
           <th>Customer Name</th>
           <th>Total Amount</th>
           <th>Status</th>
           <th>Order Id</th>
           <th>Location</th>
         </tr>
       </thead>
       <tbody>
         {
         order_data.map((value,key) => {
           console.log('v', value)
           return(
             <tr key={key}>
               <td>{value.item}</td>
               <td>{value.customername}</td>
               <td>{value.amount}</td>
               <td>{value.status}</td>
               <td>{value.id}</td>
               <td>{value.location}</td>
             </tr>
           )
         })
         }
       </tbody>
     </table>

   </div>
    </>
  )
}

export default Cart;