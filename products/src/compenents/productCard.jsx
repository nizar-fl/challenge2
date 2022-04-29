import './../App.css'

function ProductCard({product}){
    return(
        <div>
            <img className="productimg" src={product.image} alt="" />
            <p className='producttitle'>{product.title}</p>
            <p className='productdesc'>{product.description}</p>
            <p className='productprice'>{product.price}</p>
        </div>
    )
}
export default ProductCard