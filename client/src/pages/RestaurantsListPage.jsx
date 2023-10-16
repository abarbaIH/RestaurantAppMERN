import { Container, Row, Col } from 'react-bootstrap'
import restaurantsService from '../services/restaurants.services'
import { useEffect, useState } from 'react'
import RestaurantList from '../components/RestaurantsList/RestaurantList'
import Loader from '../components/Loader/Loader'


const RestaurantsListPage = () => {

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        restaurantsService
            .getRestaurants()
            .then(({ data }) => setRestaurants(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <h1>Galeria de Restaurantes</h1>
            <hr />
            <Row>
                {
                    !restaurants
                        ?
                        <Loader />
                        :
                        <RestaurantList restaurants={restaurants} />

                }
            </Row>
        </Container>
    )
}

export default RestaurantsListPage

