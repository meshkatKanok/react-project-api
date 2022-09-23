import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import './Gun.css'
const Gun = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            {/* <div className='text-center  mt-10'>
                <h1 className='text-2xl fw-bolder font-bold mb-1'>All Guns Collection</h1>
                <p className='w-96 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam maiores error labore aspernatur officiis totam cumque quidem voluptatibus distinctio reprehenderit, assumenda quis id enim, cupiditate dolorem laborum explicabo velit! Rem?</p>
            </div> */}
            <div className='Card-grid mt-20'>
                {
                    data.map(data => <Card HanDleCount={props} data={data}></Card>)
                }
            </div>

        </div>
    );
};

export default Gun;