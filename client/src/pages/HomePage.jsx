import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const HomePage = () => {

    return (
        <Container>

            <Row>

                <Col md={{ span: 6, offset: 3 }}>

                    <h1>Restaurants App!</h1>
                    <hr />
                    <p>App MERN Restaurants</p>
                    <Link to="/gallery">
                        <Button variant="dark">Ir a la galería</Button>
                    </Link>

                </Col>

            </Row>

        </Container>
    )
}

export default HomePage