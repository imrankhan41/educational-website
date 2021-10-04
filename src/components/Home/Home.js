import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Product from '../Product/Product';


const Home = () => {
  
    const [courses,setCourses]=useState([]);
    const [sciences,setSciences]=useState([]);
    const [marketing,setMarketing]=useState([]);
    const [photography,setPhotography]=useState([]);
    
    useEffect(()=>{
        fetch("./development.JSON")
        .then(res=>res.json())
        .then(data => setCourses(data.slice(1,2)))
    },[])
    useEffect(()=>{
        fetch("./development.JSON")
        .then(res=>res.json())
        .then(data => setSciences(data.slice(2,3)))
    },[])
    useEffect(()=>{
        fetch("./development.JSON")
        .then(res=>res.json())
        .then(data => setMarketing(data.slice(8,9)))
    },[])
    useEffect(()=>{
        fetch("./development.JSON")
        .then(res=>res.json())
        .then(data => setPhotography(data.slice(15,16)))
    },[])
    return (
        <div className="container">
            <div>
            <Carousel className="mt-5">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.designer.io/wp-content/uploads/2020/10/Education-header.png"
                    alt="First slide"
                    />
                    <Carousel.Caption className="text-dark">
                    <h3>Come To Learn</h3>
                    <p>This is an educational website</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNe-8Z2ksZumFUTzlftOlx-D81B9nO3UR-ty9AikmGqGRd4SWu_7ZiUmBtOICvM49xZDg&usqp=CAU"
                    alt="Second slide"
                    />

                    <Carousel.Caption className="text-dark">
                    <h3>We Are Ready To Teach You</h3>
                    <p>All the highly qualified teachers are ready for you</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://edsurge.imgix.net/uploads/post/image/12914/edu_podcasts-1576018834.png?auto=compress%2Cformat&w=2000&h=810&fit=crop"
                    alt="Third slide"
                    />

                    <Carousel.Caption className="text-dark">
                    <h3>What Are You Thinking?</h3>
                    <p>Just Share with us and we all provide solution</p>
                    </Carousel.Caption>
                </Carousel.Item>
             </Carousel>
            </div>
          
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
               <h1 className="mt-5">Data Science:</h1>
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
               <div className="mb-5 row">
               <h1 className="mt-5">Photography :</h1>
                   <div className="mt-5 border border-warning bg-info ">
                  
                   {
                    photography.map(course=><Product
                        key={course.name}
                        course={course}></Product>)
                }
                   </div> 
               </div>
       </div>
    );
};

export default Home;