/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState, useEffect} from 'react'
import axios from 'axios';


function Product() {

    const [products, setProducts] = useState([]);
    async function getProducts(){
        const {data} = await axios.get('https://fakestoreapi.com/products');
        setProducts(data)
    }
    useEffect(()=>{
        getProducts();
        console.log(products)
    }, [])
return (
    <>
    <section className='text-center bg-light text-white'>
        <div className='container mt-5'>
            <div className='row g-5 text-dark'>
                    {products.map(product=>
                <div className="col-md-3 mx-3" key={product.id}>
                        <div className="card" style={{width: "18rem"}}>
                            <img className='card-img-top' style={{width:"100%", height:"200px"}} src={product.image} alt="Card image cap" />
                            <div className="card-body" style={{ width: '100%', height:'100%' }}>
                            <h5 className="card-title mt-2" style={{ height: '3rem', overflow: 'hidden' }}>{product.title}</h5>
                            <p className="card-text mt-3"><h3>{product.price}$</h3></p>
                            <a href="#" className='btn btn-primary'>Details</a>
                                
                            </div>
                        </div>
                </div>
                    )}
            </div>
        </div>
    </section>
    </>
)
}

export default Product