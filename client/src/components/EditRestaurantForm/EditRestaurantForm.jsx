import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Form, Button } from 'react-bootstrap'
import restaurantsService from "../../services/restaurants.services"

const EditRestaurantForm = () => {

    const { restaurant_id } = useParams()
    const navigate = useNavigate()

    const [restaurantEdit, setRestaurantEdit] = useState({
        name: "",
        direction: "",
        phone: "",
        imageUrl: ""
    })

    const { name, direction, phone, imageUrl } = restaurantEdit

    useEffect(() => {
        loadRestaurant()
    }, [])

    const loadRestaurant = () => {
        restaurantsService
            .editRestaurant(restaurant_id)
            .then(({ data }) => {
                const updateRestaurant = data
                setRestaurantEdit(updateRestaurant)
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setRestaurantEdit({ ...restaurantEdit, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        restaurantsService
            .editRestaurant(restaurant_id, restaurantEdit)
            .then(() => navigate('/gallery'))
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre del Restaurante</Form.Label>
                <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="direction">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" value={direction} onChange={handleInputChange} name="direction" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="text" value={phone} onChange={handleInputChange} name="phone" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="text" value={imageUrl} onChange={handleInputChange} name="imageUrl" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" style={{ marginBottom: '30px' }} type="submit">Guardar Cambios</Button>
            </div>
        </Form>
    )
}



export default EditRestaurantForm