import React from 'react';

const Product = (props) => {
    const {img,title,description,rating,averageRating,name,date,Language}=props.course;
    return (
        <div className="m-2 border d-flex border-primary bg-light">
        <div className="mx-5 ">
        <img className="h-50" src={img} alt="" />
        </div>
        <div className="">
            
            <h1>{title}</h1>
            <h4>{description}</h4>
            <p>Rating:{rating}({averageRating})</p>
            <p>Created By:{name}</p>
            <p>Release Date:{date}; Language:{Language}</p>
            <button className="mb-2 border bg-primary text-light border-rounded border-outline-warning">Buy Now</button>
        </div>
       
     
    </div>
    );
};

export default Product;