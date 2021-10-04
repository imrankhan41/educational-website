import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Services = () => {
    const [courses,setCourses]=useState([]);
    const [sciences,setSciences]=useState([]);
    const [marketing,setMarketing]=useState([]);
    const [personalDev,setPersonalDev]=useState([]);
    const [photography,setPhotography]=useState([]);
    const [singing,setSinging]=useState([]);
    
    useEffect(()=>{
        fetch("./development.JSON")
        .then(res=>res.json())
        .then(data => setCourses(data.slice(1,5)))
    },[])
    useEffect(()=>{
        fetch("./development.JSON")
        .then(res=>res.json())
        .then(data => setSciences(data.slice(5,8)))
    },[])
    useEffect(()=>{
        fetch("./development.JSON")
        .then(res=>res.json())
        .then(data => setMarketing(data.slice(8,11)))
    },[])
    useEffect(()=>{
        fetch("./development.JSON")
        .then(res=>res.json())
        .then(data => setPersonalDev(data.slice(11,14)))
    },[])
    useEffect(()=>{
        fetch("./development.JSON")
        .then(res=>res.json())
        .then(data => setPhotography(data.slice(14,16)))
    },[])
    useEffect(()=>{
        fetch("./development.JSON")
        .then(res=>res.json())
        .then(data => setSinging(data.slice(16,18)))
    },[])
  
    return (
        <div className="container">
              <div className="row">
              <h1 className="mt-5">Machine Learning:</h1>
                   <div className="mt-5 border border-warning bg-info">
                  
                   {
                    courses.map(course=><Product
                        key={course.name}
                        course={course}></Product>)
                }
                   </div>
                </div>
               <div className="row">
               <h1 className="mt-5">Drawing with Photoshop ,Blender</h1>
                   <div className="mt-5 border border-warning bg-info">
             
                   {
                    sciences.map(course=><Product
                        key={course.name}
                        course={course}></Product>)
                }
                   </div> 
               </div>
               <div className="row">
               <h1 className="mt-5">Digital Marketing:</h1>
                   <div className="mt-5 border border-warning bg-info">
                
                   {
                    marketing.map(course=><Product
                        key={course.name}
                        course={course}></Product>)
                }
                   </div> 
               </div>
               <div className="row">
               <h1 className="mt-5">Personal Development:</h1>
                   <div className="mt-5 border border-warning bg-info">
                  
                   {
                    personalDev.map(course=><Product
                        key={course.name}
                        course={course}></Product>)
                }
                   </div> 
               </div>
               <div className="row">
               <h1 className="mt-5">Photography :</h1>
                   <div className="mt-5 border border-warning bg-info ">
                  
                   {
                    photography.map(course=><Product
                        key={course.name}
                        course={course}></Product>)
                }
                   </div> 
               </div>
               <div className="row">
               <h1 className="mt-5">Singing Development :</h1>
                   <div className="mt-5 border border-warning bg-info ">
                  
                   {
                    singing.map(course=><Product
                        key={course.name}
                        course={course}></Product>)
                }
                   </div> 
               </div>
        </div>
    );
};

export default Services;