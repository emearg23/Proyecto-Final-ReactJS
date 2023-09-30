// Components :D
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

// Custom Hooks
import { useCollection } from "../hooks/useCollection";

const Home = () => {

   const {data, loading} = useCollection("products")

  return (
    
   loading ? <LoaderComponent /> : <ItemListContainer productsData={data} />
    
  )
}

export default Home;