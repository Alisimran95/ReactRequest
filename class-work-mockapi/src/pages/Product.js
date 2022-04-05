/* eslint-disable jsx-a11y/alt-text */
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import {Row,Col} from "reactstrap";
import { mockApiService } from '../api/services/mockApi/mockApi';

function Product() {
    const{id} = useParams();
    const [product,setProduct] = useState([]);

    useEffect((p)=>{
        mockApiService.getProduct(id)
        .then(({data})=>{setProduct(data)})
    },[id])

  return (
       <Row>
           <Col lg={6} xs={12}>
                <img src={product.imageUrl}  width={400} height={400}/>            
            </Col>
            <Col lg={6} xs={12} className="mt-5">
                <h1>{product.productName}</h1>
                <p>{product.description}</p>
                <p className='text-danger'><strong>${product.price}</strong></p>
                <h4>year:{product.year}</h4>
                <button>Add to cart</button>
            </Col>
       </Row>
  )
}

export default Product