import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import { mockApiService } from '../api/services/mockApi/mockApi';
import "../styles/DeleteProduct.scss"

function DeleteProduct() {
    const [id, setId] = useState("");
    const history = useHistory();

    const DeletePost=(e)=>{
        e.preventDefault();
        mockApiService.deleteProduct(id).then(({data})=>{
            alert(`${id}"successfully deleted from products"`);
            history.push("/");
        })
        .catch((error)=>{
            document.querySelector(".deleted-product").innerHTML = "Invalid id";
        })
    }
  return (
         <div className="delete-product-container">
     <div className="form">
     <form id="delete-product-form" onSubmit={DeletePost}>
        <input
          type="number"
          name="id"
          placeholder="Id"
          value={id}
          onChange={(e)=>setId(e.target.value)  }
        />
        <button id="delete-product-btn"  type='submit'>Delete</button>
        <div className='deleted-product text-danger'></div>
    </form>
    </div>
    </div>
  )
}

export default DeleteProduct