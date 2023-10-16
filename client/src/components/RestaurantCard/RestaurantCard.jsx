import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import './RestaurantCard.css'

const RestaurantCard = ({ name, imageUrl, _id }) => {
    return (
        <Card className="mb-3 RestaurantCard">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <div className="d-grid">
                    <Link to={`/details/${_id}`} className="btn btn-dark btn-sm">Detalles</Link>

                </div>
            </Card.Body>
        </Card>
    )
}
export default RestaurantCard