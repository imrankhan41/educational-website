import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Product from '../Product/Product';


const Home = () => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch("./development.JSON")
        .then(res=>res.json())
        .then(data => setCourses(data.slice(1,5)))
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
                    <Carousel.Caption>
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

                    <Carousel.Caption>
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

                    <Carousel.Caption>
                    <h3>What Are You Thinking?</h3>
                    <p>Just Share with us and we all provide solution</p>
                    </Carousel.Caption>
                </Carousel.Item>
             </Carousel>
            </div>
          
               <div className="row">
                   <div className="mt-5">
                  <h1>Machine Learning</h1>
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

export default Home;