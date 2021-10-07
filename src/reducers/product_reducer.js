import 
{
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR

} from '../actions';


const products_reducer = (state,action) =>
{

    
    if(action.type ===SIDEBAR_OPEN ) {

        return {...state,isSideBarOpen:true}
    }

    if(action.type === SIDEBAR_CLOSE)
    {
       return{...state, isSideBarOpen:false}
    }

    if(action.type === GET_PRODUCTS_BEGIN){

        return {...state, productsLoading : true}
    }

    if(action.type===GET_PRODUCTS_SUCCESS)
    {

        const featuredProducts = action.payload.filter((prod) => {

            return prod.featured === true;
        })
        return {


            ...state,
            productsLoading:false,
            products:action.payload,
            featuredProducts:featuredProducts

        }
    }

    if(action.type === GET_PRODUCTS_ERROR)
    {
        return {

            ...state,
            productsLoading:false,
            productsError:true
        }
    }

    throw new Error(`no action ${action.type}`)

}

export default products_reducer;