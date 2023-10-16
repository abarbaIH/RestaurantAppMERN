import React from 'react'
import { Container } from 'react-bootstrap'
import EditRestaurantForm from '../components/EditRestaurantForm/EditRestaurantForm'


const EditRestaurantPage = () => {

    return (

        <Container>
            <h1>Editar Restaurante</h1>
            <hr />
            <EditRestaurantForm />

        </Container>

    )
}

export default EditRestaurantPage