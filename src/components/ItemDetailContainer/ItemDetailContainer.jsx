// Components :D
import ItemCount from "../ItemCount/ItemCount";

// Hooks
import React from "react";

// React Bootstrap
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

// Styles
import styles from './ItemDetailContainer.module.css';

const ItemDetailContainer = ({ productData }) => {
  const [stock, setStock] = React.useState(10);
  

  return (
    <div className={styles.cardContainer}>
      <Card className={styles.card} style={{border: "1px solid yellow"}}>
      <Card.Img className={styles.cardImage} variant="top" src={productData.thumbnail} />
      <Card.Body>
        <Card.Title className={styles.cardTitle}>{productData.title}</Card.Title>
        <Card.Text className={styles.cardText} style={{ paddingBottom: "3rem"}}>{productData.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className={styles.price} style={{ border: "2px solid white"}}>${productData.price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <ItemCount />
        {stock >= 5 ? (
          <strong style={{color: "yellow", marginLeft: "15px"}}>Stock disponible</strong>
        ) : (
          <strong style={{color: "yellow", marginLeft: "15px"}}>Ultimas unidades disponibles!</strong>
        )}
      </Card.Body>
    </Card>
    </div>
  );
};

export default ItemDetailContainer;
