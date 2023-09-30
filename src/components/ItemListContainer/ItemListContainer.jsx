// React Router DOM
import { useNavigate } from "react-router-dom";

// React Bootstrap
import Card from "react-bootstrap/Card";

// Components
import Slider from "../Slider/Slider"

// Styles
import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({ productsData }) => {
  
  const navigate = useNavigate();
  return (
    <>
    <Slider/>
    <div className={styles.productListContainer}>
      {productsData.map((product) => {
        return (
          <Card className={styles.card} style={ { color: "#fff" }} key={product.id}>
            <Card.Img className={styles.cardImage} variant="top" src={product.thumbnail} />
            <Card.Body style={{border: "1px solid yellow"}}>
              <Card.Title className={styles.cardTitle}>{product.title}</Card.Title>
              <Card.Text className={styles.cardText}>{product.description}</Card.Text>
              <button
                className={styles.button}
                style={{margin: "auto", flexFlow: "column"}}
                onClick={() => navigate(`/item/${product.id}`)}
              >
                Detalles
              </button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
    </>
  );
};

export default ItemListContainer;