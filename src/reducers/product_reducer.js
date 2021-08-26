import 
{
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE

} from '../actions';


const products_reducer = (state,action) =>
{

    
    if(action.type ===SIDEBAR_OPEN ) {

        return {...state,isSideBarOpen:true}
    }

    if(action.type === SIDEBAR_CLOSE)
    {
       return{...state,isSideBarOpen:true}
    }

    throw new Error(`no action ${action.type}`)

}

export default products_reducer;