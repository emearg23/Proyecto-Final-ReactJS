// React Router DOM
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Components
import NavBar from '../components/NavBar/NavBar';

// Pages :)
import Category from '../pages/Category';
import Home from '../pages/Home';
import ItemDetails from '../pages/ItemDetails';

const MainRouter = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />   
            <Route path='/category/:categoryName' element={<Category />} />
            <Route path='/item/:itemId' element={<ItemDetails />} />
        </Routes>
    </Router>
  );
}

export default MainRouter;