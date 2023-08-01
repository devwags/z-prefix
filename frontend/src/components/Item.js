import Card from 'react-bootstrap/Card';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const Item = () => {
  const [item, setItem] = useState({});
  const {itemId} = useParams();

  useEffect(()=>{
    fetch(`http://localhost:8080/items/${itemId}`)
    .then((res)=>res.json())
    .then((data)=>setItem(data))
  }, [])

  return (
    <Card>
      <Card.Body>
        <Card.Title>{item.item_name}</Card.Title>
        <Card.Subtitle>Quantity: {item.quantity}</Card.Subtitle>
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Item;