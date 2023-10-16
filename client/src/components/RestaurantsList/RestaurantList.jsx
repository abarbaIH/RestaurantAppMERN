import RestaurantCard from "../RestaurantCard/RestaurantCard"
import { Col } from 'react-bootstrap'


const RestaurantList = ({ restaurants }) => {

    return (
        restaurants.map(restaurant => {
            return (
                <Col md={{ span: 4 }} key={restaurant._id}>
                    <Col></Col>
                    <RestaurantCard {...restaurant} />
                </Col>
            )
        })

    )
}

export default RestaurantList