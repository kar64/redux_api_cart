import React from 'react'
import{useSelector,useDispatch}from'react-redux';
import{closeModal}from'../features/madal/modalSlice';
import{clearCart}from'../features/cart/cartSlice';

// export interface ModalProps {}
// export const Modal=({}:ModalProps)=>(

export const Modal=()=>{
const dispatch=useDispatch()
const {isOpen}=useSelector(store=>store.modal)

return(
    <>
        {isOpen&&(  <aside className="modal-container">
        <div className="modal">
            <h4>remove all items from your shopping cart?</h4>
            <div className="btn-container">
                <button type='button' className='btn confirm-btn'
                onClick={
                    ()=>{
                        dispatch(clearCart())
                        dispatch(closeModal())
                    }
                }
                  
                >
                    confirm
                </button>
                <button type='button' className='btn clear-btn'
                onClick={()=>dispatch(closeModal())}
                >
                    cansel
                </button>
            </div>
        </div>
      </aside>)}
     </>
    )
   

}
