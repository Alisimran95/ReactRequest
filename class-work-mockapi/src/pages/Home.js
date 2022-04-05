import React from 'react'
import { mockApiService } from '../api/services/mockApi/mockApi';
import {Row,Col,CardGroup,Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,Spinner} from "reactstrap";
import {NavLink} from 'react-router-dom';

function Home() {
  const [state, setState] = React.useState([]);
  const[loading,setLoading] = React.useState(false);

  React.useEffect(() => {
    mockApiService.getAllProducts().then(({data})=>{
      setState(data);
      setLoading(true);
    });
  }, []);

  return (
    <div>
     <div>
     <NavLink to={"/add-product"}  className="btn btn-outline-primary">Create Product</NavLink>
      <NavLink to={"/delete-product"}  className="btn btn-outline-danger" >Delete Product</NavLink>
     </div>

      <Row>
      {
          loading ?(
            state?.map((product)=>(
              <Col key={product.id} xs={12} lg={3} className="mt-3">
            <CardGroup>
                <Card lg={3} >
                  <CardImg
                    alt="Card image cap"
                    src={product.imageUrl}
                    top
                    width={100}
                    height={200}
                  />
                  <CardBody>
                    <CardTitle tag="h5">{product.productName}</CardTitle>
                    <CardSubtitle className="text-danger">salePrice: ${product.price}</CardSubtitle>
                    <CardText>
                    {product.description}
                    </CardText>
                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Go to detail</NavLink>
                  </CardBody>
                </Card> 
            </CardGroup>
          </Col>
          ))
          ):<div style={{display:"flex", justifyContent:"center",textAlign:"center",alignItems:"center"}}>
            <Spinner  animation="border" style={{color:"red"}} variant="danger" />
          </div>   }
        </Row>
    </div>
  )
}

export default Home