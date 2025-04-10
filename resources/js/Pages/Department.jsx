import React from "react";
 
import CardList from "./Components/CardList";

 

const DepartmentList = ({departments}) => {
  return (
    <div className="">
     <CardList items={departments} path={'/department'}  text={'Visiter le Departement'} titre={"AKSIAM Departement"}/>
    </div>
  );
};

export default DepartmentList;
