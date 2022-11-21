import React from 'react';
const data=[
  {employeename:"John",designation:"Sales Representative",country:"USA",hiredate:"01/10/2022",reportsto:"Brazil",id:1},
  {employeename:"Hazel",designation:"Sales Representative",country:"Canada",hiredate:"12/09/2021",reportsto:"Brazil",id:2},
  {employeename:"Donish",designation:"Sales Representative",country:"Australia",hiredate:"23/05/2020",reportsto:"Brazil",id:3},
  {employeename:"Cecilia",designation:"Sales Representative",country:"Europe",hiredate:"15/12/2022",reportsto:"Brazil",id:4},
  {employeename:"Rohan",designation:"Sales Representative",country:"India",hiredate:"10/07/2009",reportsto:"Brazil",id:5},
  {employeename:"Ankit",designation:"Sales Representative",country:"USA",hiredate:"16/11/2012",reportsto:"Brazil",id:6},
  {employeename:"Josephine",designation:"Sales Representative",country:"Japan",hiredate:"28/04/2018",reportsto:"Brazil",id:7},
  {employeename:"Jack",designation:"Sales Representative",country:"Austria",hiredate:"7/06/2016",reportsto:"Brazil",id:8},
  {employeename:"Priya",designation:"Sales Representative",country:"England",hiredate:"22/03/2022",reportsto:"Brazil",id:9},
  {employeename:"Bunny",designation:"Sales Representative",country:"Germany",hiredate:"19/02/2008",reportsto:"Brazil",id:10}
]

const Employees = () => {
  return (
    <>
    <div className='container_employee'>
      <table style={{cellSpacing:"3"}}>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Designation</th>
            <th>Country</th>
            <th>Hire Date</th>
            <th>Reports to</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {
          data.map((value,key) => {
            return(
              <tr key={key}>
                <td>{value.employeename}</td>
                <td>{value.designation}</td>
                <td>{value.country}</td>
                <td>{value.hiredate}</td>
                <td>{value.reportsto}</td>
                <td>{value.id}</td>
              </tr>
            )
          })
          }
        </tbody>
      </table>

    </div>
    </>
  );
};

export default Employees;