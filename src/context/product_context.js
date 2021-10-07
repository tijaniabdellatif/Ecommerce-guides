import React, {useContext,useEffect,useReducer} from 'react';
import { products_url as url } from '../utils/constants';
import axios from 'axios';

import reducer from '../reducers/product_reducer';

import {

    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from '../actions';


const initialState = {
    isSideBarOpen : false,
    productsLoading : false,
    productsError : false,
    products : [],
    featuredProducts : []
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({children}) => {

    
    const [state,dispatch] = useReducer(reducer,initialState)

    const openSidebar = () => {

        dispatch({type: SIDEBAR_OPEN});
    }

    const closeSidebar = () => {
        dispatch({type: SIDEBAR_CLOSE});
    }

    /**
     *   Fetch products 
     */



        const fetchProducts = async (url) => {

                dispatch({type:GET_PRODUCTS_BEGIN})

                try{

                    const response = await axios.get(url,{

                          headers:{
                              'Content-type' :'application/json'
                          }
                    })

                    const products = response.data;

                    dispatch({type:GET_PRODUCTS_SUCCESS,payload : products})

                }
                catch(error){

                         dispatch({type:GET_PRODUCTS_ERROR});
                }
        }

        
        useEffect(() => {

              fetchProducts(`${url}`);

        },[])

    return (
        <ProductsContext.Provider value={{...state,openSidebar,closeSidebar}}>
            {children}
        </ProductsContext.Provider>
    );
}

export const useProductsContext = () => {

    return useContext(ProductsContext);
}