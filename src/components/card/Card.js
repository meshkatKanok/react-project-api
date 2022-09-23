import React from 'react';
import './Card.css'

const Card = (props) => {
    console.log(props)
    const {HanDleCount}=props.HanDleCount
    const {name,img,bullet,capacity,price}=props.data;
    
    // console.log(props.data)
    
    return (
        <div>
            <div className="card bg-base-100 shadow-xl Card">
                <figure><img className='img' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2>Bullet:{bullet}</h2>
                    <h3>Capacity:{capacity}</h3>
                    <h4>Price:{price}</h4>
                    <div className="card-actions justify-center">
                        <button onClick={HanDleCount}   className="btn btn-primary">Add To Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;