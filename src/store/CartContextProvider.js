import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState={
    items:[],
    totalAmount:0
}
const cartReducer =(state,action)=>{
    if(action.type==="ADD_ITEM"){
    //    const updatedItems=state.items.concat(action.data);
       const updatedAmount=state.totalAmount+action.data.amount*action.data.price;
       const eleIndex=state.items.findIndex(item=> item.id===action.data.id);
       const currElement=state.items[eleIndex];
       if(currElement){
            
            const updatedItems=[...state.items];

            const updatedItem=updatedItems[eleIndex];
            updatedItem.amount+=action.data.amount;
            return {items:updatedItems,totalAmount:updatedAmount};
       }else{
        const updatedItems=state.items.concat(action.data);
        return {items:updatedItems,totalAmount:updatedAmount};
       }
      
    }
    if(action.type==="REMOVE"){
        
       const eleIndex=state.items.findIndex(item=> item.id===action.id);
    //    const currElement=state.items[eleIndex];
     
            
            const updatedItems=[...state.items];

            const updatedItem=updatedItems[eleIndex];
            
            if(updatedItem.amount>0){
            updatedItem.amount--;
            const updatedAmount=state.totalAmount-updatedItem.price;
            return {items:updatedItems,totalAmount:updatedAmount};
        }
        const updatedAmount=state.totalAmount

        return {items:updatedItems,totalAmount:updatedAmount};
       
    }

    return defaultCartState;
    
}
const CartContextProvider=props =>{
    const [cartState,cartDispatch]=useReducer(cartReducer,defaultCartState);
    const addItemToCart=item=>{
        cartDispatch({type:"ADD_ITEM",data:item});

        // console.log('item added');
        // console.log(cartState);
    }
    const removeItemFromCart=id=>{
        cartDispatch({type:"REMOVE",id:id})

    }
    const data={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCart,
        removeItem:removeItemFromCart
    }
    return (<CartContext.Provider value={data}>

        {props.children}
    </CartContext.Provider>)
}
export default CartContextProvider;