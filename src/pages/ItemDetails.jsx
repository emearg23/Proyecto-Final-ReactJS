// Components :D
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
 
// React Router DOM
import { useParams } from "react-router-dom";

// Custom Hook
import { useItemCollection } from "../hooks/useItemCollection";

const ItemDetails = () => {

    const {itemId} = useParams();

    const {data, loading} = useItemCollection("products", itemId);
    
  return loading ? <LoaderComponent /> : <ItemDetailContainer productData={data} />
}

export default ItemDetails;