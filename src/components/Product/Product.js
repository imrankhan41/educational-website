import React from 'react';

const Product = (props) => {
    const {img,title,description,rating,averageRating,name,date,Language,price}=props.course;
    return (
        <div className="m-2 d-flex border-bottom">
            
        <div className="mx-5 ">
        <img className="h-45" src={img} alt="" />
        </div>
        <div>
            <h1>{title}</h1>
            <h4>{description}</h4>
            <p>Rating:{rating}({averageRating})</p>
            <p>Created By:{name}</p>
            <h4>Price:{price}</h4>
            <p>Release Date:{date}; Language:{Language}</p>
            <button className="px-4 py-2 mb-2 border bg-primary text-light border-rounded border-outline-warning">Buy Now</button>  
        </div>
       
        
    </div>
    );
};

export default Product;