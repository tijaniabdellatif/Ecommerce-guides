import React, {useContext,useEffect,useReducer} from 'react';

import reducer from '../reducers/product_reducer';

import {

    SIDEBAR_OPEN,
    SIDEBAR_CLOSE
} from '../actions';


const initialState = {
    isSideBarOpen : false,
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


    return (
        <ProductsContext.Provider value={{...state,openSidebar,closeSidebar}}>
            {children}
        </ProductsContext.Provider>
    );
}

export const useProductsContext = () => {

    return useContext(ProductsContext);
}