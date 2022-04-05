import React,{useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { mockApiService } from "../api/services/mockApi/mockApi";
import "../styles/AddProduct.scss"

function AddProduct() {
//   const [id,setId] = useState();
  const [categoryId, setcategoryId] = useState("");
  const [productName, setproductName] = useState("");
  const [price, setprice] = useState("");
  const [year, setyear] = useState("");
  const [description, setdescription] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const history = useHistory()

  const CreatePost =(e)=>{
        e.preventDefault();
        const formData = {
            categoryId,
            productName,
            price,
            year,
            description,
            imageUrl
        }
        mockApiService.createProduct(formData).then(response=>{
            alert("succesfully added product");
            history.push("/");
        }).catch((error)=>{
            alert(error);
        })
  }
  return (
    <div className="add-product-container">
     <div className="form">
     <form id="add-product-form" onSubmit={CreatePost}>
        {/* <input type="text" name='id' placeholder='id' /> */}
        <input
          type="number"
          name="categoryId"
          placeholder="categoryId"
          value={categoryId}
          onChange={(e)=>setcategoryId(e.target.value)  }
        />
        <input
          type="text"
          name="productName"
          placeholder="productName"
          value={productName}
          onChange={(e)=>setproductName(e.target.value)}
        />
        <input type="number" name="price" placeholder="price" value={price} onChange={(e)=>setprice(e.target.value)} />
        <input type="number" name="year" placeholder="year" value={year}  onChange={(e)=>setyear(e.target.value)} />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={description}
          onChange={(e)=>{setdescription(e.target.value)}}
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="imageUrl"
          value={imageUrl}
          onChange={(e)=>{setimageUrl(e.target.value)}}
        />
        <button className="add-product-btn" type="submit">Add product</button>
      </form>
     </div>
    </div>
  );
}

export default AddProduct;
