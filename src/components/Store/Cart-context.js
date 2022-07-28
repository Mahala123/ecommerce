
import React from "react";

const Cartcontext=React.createContext({

    items:[],
    total:0,
    additems:(item)=>{},
    deleteitems:(id)=>{},
})

export default Cartcontext;