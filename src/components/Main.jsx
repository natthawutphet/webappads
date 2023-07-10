import React, { useState, useEffect } from "react";
import Axios from "axios";
import './Main.css'
function Main() {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = () => {
    Axios.get("http://119.59.114.155:3003/main").then((response) => {
      setEmployeeList(response.data);
    });
  };

  return (
 <> 

   <div  class="container text-center"> <h1>รับจ้างทำโฆษณา ออนไลน์ facebook, google ads สายเทา </h1><a href="index.htnl"><img  className='mainimg' src="https://webappads.com/team_ads.png" alt="ทีมงาน รับยิงแอดสายเทา"/></a>
   
   

   </div>

  
    
  



   </>
  )
}

export default Main
