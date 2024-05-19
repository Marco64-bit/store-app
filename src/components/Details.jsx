import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


function Details() {
    let params = useParams();
    const [products, setProducts] = useState([]);
    async function getProducts(){
        const {data} = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
        setProducts(data)
    }
    function buy(){
        window.alert("Thanks for buying the product. See you soon! :)");
    }
    useEffect(()=>{
        getProducts();
        console.log(products)
    }, [])
    return (
    <section className='by-5 container'>
        <div className="row">
            <div className="col-md-6">
            
            <h3>{products.title}</h3>
            <h3>{products.category}</h3>
            <p>{products.description}</p>
            <Link to='/' className='btn btn-secondary w-25 ms-4 me-5'>Back</Link>
            <button onClick={buy} type='button' className=' btn btn-success w-50'>Buy</button>
            </div>
            <div className="col-md-6">
                <img src={products.image} className='w-100' alt="img" />
            </div>
        </div>
    </section>
    )
}

export default Details