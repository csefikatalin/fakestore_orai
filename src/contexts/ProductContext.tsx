import React, { createContext, useContext, useState, type ReactNode } from "react";
import type { productType } from "../types/productType";

interface ProductContextType{
   productsList:productType[] 
}
const ProductContext=createContext<ProductContextType|undefined>(undefined);

export function ProductProvider({children}:{children:ReactNode}){
    const [productsList,setProductsList]=useState<productType[] >([])

    return (
        <ProductContext.Provider value = {{productsList}}>
            {children}
        </ProductContext.Provider>
    )
}

export function useProductContext(){
    const context=useContext(ProductContext)
    if (context===undefined){
        throw new Error(
            "Csak a productsProvideren belül használható"
        )
    }
    return context
}