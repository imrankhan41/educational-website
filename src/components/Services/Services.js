import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Services = () => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch("./development.JSON")
        .then(res=>res.json())
        .then(data => setCourses(data))
    },[])
    
  
    return (
        <div className="container">
               <div className="row">
                   <div className="">
                   {
                    courses.map(course=><Product
                        key={course.name}
                        course={course}></Product>)
                }
                   </div>
                   
               </div>
        </div>
    );
};

export default Services;