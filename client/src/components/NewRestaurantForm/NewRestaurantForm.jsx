import { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import restaurantsService from "../../services/restaurants.services"
import { useNavigate } from "react-router-dom"
import FormError from "../FormError/FormError"


const NewRestaurantForm = () => {

    const [restaurantData, setRestaurantData] = useState({
        name: "",
        direction: "",
        phone: "",
        imageUrl: ""
    })

    const [errors, setErrors] = useState([])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setRestaurantData({
            ...restaurantData, [name]: value
        })
    }

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        restaurantsService
            .saveRestaurant(restaurantData)
            .then(() => navigate('/gallery'))
            .catch(err => {
                setErrors(err.response.data.errorMessages)
            })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre del Restaurante</Form.Label>
                <Form.Control type="text" value={restaurantData.name} name="name" onChange={handleInputChange} />
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" value={restaurantData.phone} name="phone" onChange={handleInputChange} />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="direction">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control type="text" value={restaurantData.direction} name="direction" onChange={handleInputChange} />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Imagen (URL)</Form.Label>
                <Form.Control type="text" value={restaurantData.imageUrl} name="imageUrl" onChange={handleInputChange} />
            </Form.Group>

            {errors.length > 0 && <FormError>{errors.map(elm => <p>{elm}</p>)}</FormError>}

            <div className="d-grid mt-3">
                <Button variant="dark" type="submit">Crear Restaurante</Button>
            </div>
        </Form>
    )
}

export default NewRestaurantForm