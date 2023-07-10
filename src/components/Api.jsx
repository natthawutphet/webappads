import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Api.css";

const Api = () => {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = () => {
    Axios.get("http://119.59.114.155:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  return (
    
    <div className="App container">
     <h1>เนื้อหาที่มีความรู้</h1>
      {employeeList.map((val, key) => (
        <div key={key} className="Content">
          <div className="Content-box">
            <p className="card-text">
              <img className="apiimg"
             src={`http://119.59.114.155/uploads/${val.name}`}
              alt="รูปภาพ"
             />
            </p>
            <h1 className="card-text">เรื่อง: {val.age}</h1>
            <h3 className="card-text">ข้อมูล: {val.country}</h3>
            <p className="card-text">รายละเอียด: {val.position}</p>
            <p className="card-text">หมายเหตุ: {val.wage}</p>
            <div className="d-flex"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Api;
