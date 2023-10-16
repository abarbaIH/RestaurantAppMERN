import { useContext, useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import restaurantsService from "../services/restaurants.services"
import { Row, Col, Container, Button } from "react-bootstrap"
import Loader from "../components/Loader/Loader"
import { AuthContext } from "../contexts/auth.context"

const RestaurantDetailsPage = () => {

    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

    const { restaurant_id } = useParams()

    const [restaurant, setRestaurant] = useState({})

    useEffect(() => {
        loadRestaurant()
    }, [])

    const loadRestaurant = () => {
        restaurantsService
            .getOneRestaurant(restaurant_id)
            .then(({ data }) => setRestaurant(data))
            .catch(err => console.log(err))
    }

    const handleSubmit = () => {
        restaurantsService
            .deleteRestaurant(restaurant_id)
            .then(() => navigate('/gallery'))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            {
                !restaurant
                    ?
                    <Loader />
                    :
                    <>
                        <h1>Detalles de {restaurant.name}</h1>
                        <hr />

                        <Row>

                            <Col md={{ span: 6 }}>
                                <h3>Dirección</h3>
                                <p>{restaurant.direction}</p>
                                <h3>Teléfono de contacto</h3>
                                <p>{restaurant.phone}</p>

                                <hr />

                                <Link to="/gallery">
                                    <Button variant="dark" style={{ marginRight: '10px' }}>Volver a la galería</Button>
                                </Link>
                                {
                                    user &&
                                    <>
                                        <Link to={`/editar/${restaurant_id}`}>
                                            <Button variant="success" style={{ marginRight: '10px' }}>Editar Restaurante</Button>
                                        </Link>
                                        <Button variant="danger" onClick={handleSubmit}>Eliminar Restaurante</Button>
                                    </>
                                }


                            </Col>

                            <Col md={{ span: 4 }}>
                                <img src={restaurant.imageUrl} style={{ width: '100%' }} />
                            </Col>

                        </Row>
                    </>
            }

        </Container>
    )
}

export default RestaurantDetailsPage