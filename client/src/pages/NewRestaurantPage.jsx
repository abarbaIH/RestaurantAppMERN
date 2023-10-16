import { Container } from "react-bootstrap"
import NewRestaurantForm from "../components/NewRestaurantForm/NewRestaurantForm"

const NewRestaurantPage = () => {
    return (
        <Container>
            <h1>Nuevo Restaurante</h1>
            <hr />
            <NewRestaurantForm />
        </Container>
    )
}

export default NewRestaurantPage