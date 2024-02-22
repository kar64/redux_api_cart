import React from 'react'
import{useSelector,useDispatch}from'react-redux';
import{ChevronDown,ChevronUp}from'../icons';
import{removeItem,incItem,decItem}from'../features/cart/cartSlice';




export const CartItem=({id,title,price,img,amount})=>{
const dispatch=useDispatch()
    return(
        <article className="cart-item">
            <img src={img} alt={title} />
            <div className="">
                <h4>{title}</h4>
                <h4 className="item-price">${price}</h4>
                <button className="remove-btn"
                onClick={()=>{dispatch(removeItem(id))}}
                >remove</button>
            </div>
            <div className="">
                <button className="amount-btn"
                onClick={()=>{dispatch(incItem(id))}}
                ><ChevronUp/></button>
                <p className="amount">{amount}</p>
                <button className="amount-btn"
                onClick={()=>{dispatch(decItem(id))}}
                ><ChevronDown/></button>
            </div>
        </article>
    )
    
}
