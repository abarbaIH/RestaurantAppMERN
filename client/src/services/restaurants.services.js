import axios from 'axios'

class RestaurantService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/restaurants`
        })
    }

    getRestaurants() {
        return this.api.get('/getAllRestaurants')
    }

    getOneRestaurant(restaurant_id) {
        return this.api.get(`/getOneRestaurant/${restaurant_id}`)
    }

    saveRestaurant(restaurantData) {
        return this.api.post('/saveRestaurant', restaurantData)
    }

    editRestaurant(restaurant_id, restaurantData) {
        return this.api.put(`/${restaurant_id}/edit`, restaurantData)
    }

    deleteRestaurant(restaurant_id) {
        return this.api.delete(`/${restaurant_id}/delete`)
    }
}

const restaurantsService = new RestaurantService()

export default restaurantsService