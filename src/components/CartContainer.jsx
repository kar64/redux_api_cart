import React,{useEffect} from 'react'
import{CartItem}from'./CartItem';
import{useSelector,useDispatch}from'react-redux';
import{calculateTotals,setAllItems}from'../features/cart/cartSlice';
import{openModal}from'../features/madal/modalSlice';
import{useGetAllItemsQuery}from'../api/cartApi';
import{cartItemss}from'../cartItems';




export const CartContainer=()=>{

  const {data,isLoading}=useGetAllItemsQuery()


    const{cartItems,total,amount}=useSelector((store)=>store.cart)
    const dispatch=useDispatch()
    useEffect(
      
      ()=>{if(!isLoading)dispatch(setAllItems(data))},[data]
    )
  
    useEffect(()=>{dispatch(calculateTotals())},[cartItems])
    return (
      <>
        {(isLoading) ? (

          <h1>..loading</h1>

        ) : (amount < 1) ? (

          <section className="cart">
            <header>
              <h2>you bag</h2>
              <h4 className="empty-cart">is currently empty</h4>
            </header>
          </section>

        ) : (

          <section className="cart">
            <header>
              <h2>your bag</h2>
            </header>
            <div className="">
              {cartItems.map((it) => (
                <CartItem key={it.id} {...it} />
              ))}
            </div>
            <footer>
              <hr />
              <div className="cart-total">
                <h4>
                  total<span>${total.toFixed(2)}</span>
                </h4>
              </div>
              <button
                className="btn clear-btn"
                onClick={() => dispatch(openModal())}
              >
                clear cart
              </button>
            </footer>
          </section>

        )}
      </>
    );
    

          
  }
            
            
