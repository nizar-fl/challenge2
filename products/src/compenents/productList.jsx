import products from "../Data";
import ProductCard from "./productCard";
import './../App.css'
function ProductsList(){
    return(
        <div className="box">
         
            {products.map((Product) => <ProductCard product={Product} />
           )}
             
            
        </div>
    )
}
export default ProductsList