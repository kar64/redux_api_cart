import{createSlice}from'@reduxjs/toolkit';
import cartItems from'../../cartItems';




const initialState={
    cartItems:[],
    amount:1,
    total:0,
    isLoading:true
}


const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
         clearCart:(state)=>{
             state.cartItems=[]
         },
         removeItem:(state,action)=>{
            state.cartItems=state.cartItems.filter(it=>it.id!==action.payload)
         },
         incItem:(state,action)=>{
            const searchItem=state.cartItems.find(it=>it.id===action.payload)
            searchItem.amount=searchItem.amount+1
         },
         decItem:(state,action)=>{
            const searchItem=state.cartItems.find(it=>it.id===action.payload)
            if(searchItem.amount>1)
            searchItem.amount=searchItem.amount-1
         },
         calculateTotals:(state)=>{
            let amount=0
            let total=0
            state.cartItems.forEach(it=>{
                amount+=it.amount
                total+=it.amount*it.price
            })
            state.amount=amount
            state.total=total
         },
         setAllItems:(state,action)=>{
            state.cartItems=action.payload
         }
        
    }
   

})

export const{clearCart,removeItem,incItem,decItem,calculateTotals,setAllItems}=cartSlice.actions
export const cartReducer=cartSlice.reducer
