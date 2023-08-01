import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import {useEffect, useState} from 'react'


const ManagerContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/items/myItems')
      .then((res)=>res.json())
      .then((data)=>{
        console.log(items)
        setItems(data)
      })
  }, [])

  const formatDescription = (str) => {
    return (str.length > 100 ? str.substring(0,99).concat('...') : str);
  }

  const renderItems = () => {
    return items.map((item) => {
      return (
          <Card>
            <Card.Body>
              <Card.Title>{item.item_name}</Card.Title>
              <Card.Subtitle>Quantity: {item.quantity}</Card.Subtitle>
              <Card.Text>{formatDescription(item.description)}</Card.Text>
              <Card.Link href={`/items/${item.id}`}>Details</Card.Link>
            </Card.Body>
          </Card>
      )
    })
  }

  return (
    <div>
      <CardGroup>
        {items.length > 0 && renderItems()}
      </CardGroup>
    </div>
  )
}

export default ManagerContainer;