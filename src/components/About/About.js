import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';

const About = () => {
    const [teachers,setTeachers]=useState([]);
    useEffect(()=>{
        fetch("./teacher.JSON")
        .then(res=>res.json())
        .then(data=>setTeachers(data))
    },[])
    return (
        <div className="">
            <h1>Our Best Instructors:</h1>
            <div className="gap-4 p-5 m-5 d-flex">
            
            {
                teachers.map(teacher=> <Teacher key={teacher.name} teacher={teacher}></Teacher> )
            }
        </div>
        </div>
       
    );
};

export default About;