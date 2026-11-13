import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { productType } from "../types/productType";
import { getProducts } from "../services/ProductService";

interface ProductContextType {
    productsList: productType[],
    load:boolean,
    error:string|null
}
const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
    const [productsList, setProductsList] = useState<productType[]>([])
    const [load, setLoad] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        getProducts().then(data => { 
            setProductsList(data);
            setError(null)
        })
        .catch(()=>{
            setError("Nem sikerült betölteni az adatokat!")
        })
        .finally(()=>{
            setLoad(false)
        });

    }, [])/* mellékhatásokat kezeli */



    return (
        <ProductContext.Provider value={{ productsList, load, error }}>
            {children}
        </ProductContext.Provider>
    )
}

export function useProductContext() {
    const context = useContext(ProductContext)
    if (context === undefined) {
        throw new Error(
            "Csak a productsProvideren belül használható"
        )
    }
    return context
}