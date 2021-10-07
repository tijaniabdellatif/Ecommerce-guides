import React from 'react';
import {useParams} from "react-router-dom";

const SingleProductPage = () => {

   const {id} = useParams();
   
    return(<h1>{id}</h1>);

}

export default SingleProductPage;