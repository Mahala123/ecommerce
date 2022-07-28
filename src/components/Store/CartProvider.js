import { useState } from "react";
import Cartcontext from "./Cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const additemhandler = (item) => {
    console.log(item);
    let hasItem=false;
    const newItemArray=[ ...items];
    newItemArray.forEach((element,index )=> {
        if(item.id===element.id){
        hasItem=true;
            newItemArray[index].quantity=Number(newItemArray[index].quantity)+Number(item.quantity);
            
        }
    });
    if(hasItem===false)
    {
    updateItems([...items,item]);
    return [...items,item];
    }
    else{
    updateItems(newItemArray);
    
    return newItemArray;
    }
};

  const removeitemhandler = (id) => {
    {
        const newItemArray=[ ...items];
        newItemArray.forEach((index) => {
        if(id===index.id){
            newItemArray.splice(index,1);
        }
       


        })
        updateItems(newItemArray);
    };
  };

  const Cartcontextt = {
    items: items,
    total: 0,
    additems: additemhandler,
    deleteitems: removeitemhandler,
    message: "click is working",
  };

  return (
    <Cartcontext.Provider value={Cartcontextt}>
      {props.children}
    </Cartcontext.Provider>
  );
};

export default CartProvider;
