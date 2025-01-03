import react from "react";
import './AddCart.scss';
import { useSelector , useDispatch } from "react-redux";
import { clearCart, removeProduct } from "../../Slices/ApiSlice";
// import StarRating from "../Products/StarRating";
const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  console.log('all cart called');
  console.log(items);
  return (
    <div className="MyAddCart">
      <h1>All Carts</h1>
      <button onClick={()=>dispatch(clearCart())} id="clearCartButton">Clear Cart</button>
       <div className="items">
       {items.map((item, index) => (
        <div className="itemsBox">
         <ul key={index}>
         <img src={item.image} alt={item.title}/>
         <li><p>{item.title}</p></li>
         <li><h4>${item.price}</h4></li>
         <li>{item.category}</li>
         <li><h3>
         {/* <StarRating item={item}/> */}
         {item.rating.rate}</h3></li>
         <button onClick={()=>dispatch(removeProduct(item.id))}>Remove</button>
        </ul>
        </div>
        ))}
       </div>
    </div>
  );
};
export default Cart;
