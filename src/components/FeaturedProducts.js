import React from 'react'
import { useProductsContext } from '../context/product_context'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Product from './Product';
import Loading from './Loading';
import Error from './Error';


const FeaturedProducts = () => {


    /**
     * We will manage the Error and the loading context
     */

    return(
     <Wrapper>
         <div className="title">
             <h2>Featured Products</h2>
            <div className="underline"></div>
         </div>


         <section className="section-center featured">

                   {/* La consomation du composant Product et d'afficher les featured Products */}
         </section>
        
     </Wrapper>
    );

}

const Wrapper = styled.section`
background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`


export default FeaturedProducts;

