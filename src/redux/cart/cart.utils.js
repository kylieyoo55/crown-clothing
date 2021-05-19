export const addItemToCart=(cartItems,cartItemToAdd)=>{
    const existingCartItem=cartItems.find(
        item=>
item.id === cartItemToAdd.id
    )

    if(existingCartItem){
        return cartItems.map(item=>
            item.id === cartItemToAdd.id?
            {...item,quantity:item.quantity+1}
            : item
        )
    }

    return [...cartItems,{...cartItemToAdd,quantity:1}]
}

export const decreaseQuantityCart=(cartItems,itemToRemove)=>{
    const existingCartItem=cartItems.find(item=>item.id ===itemToRemove.id);
    console.log(existingCartItem);

    if(existingCartItem.quantity >1){
       return cartItems.map(item=>item.id === itemToRemove.id
        ?{...item,quantity:item.quantity-1}
        :item
       )
    }
return  cartItems;
 
    

}