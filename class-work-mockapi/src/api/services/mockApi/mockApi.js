import { HttpClient } from "../../HttpClient";

class MockApiService extends HttpClient{
    constructor() {
        super("https://624b1b4871e21eebbced01d1.mockapi.io/");
    }

    getAllProducts(){
        return this.get("products");    
    }
    getAllUsers(){
        return this.get("users");
    }
    getProduct(id){
    return this.getProductById("products",id)
    }
    createProduct(body){
        return this.post("products",body)
    }
    deleteProduct(id){
        return this.delete("products",id);
    }
}

export const mockApiService = new MockApiService();