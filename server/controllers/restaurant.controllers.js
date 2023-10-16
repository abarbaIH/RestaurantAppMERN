const Restaurant = require('./../models/Restaurant.model')


const getAllRestaurants = (req, res, next) => {
    Restaurant
        .find()
        .select({ name: 1, imageUrl: 1 })
        .sort({ name: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}
const getOneRestaurant = (req, res, next) => {
    const { restaurant_id } = req.params
    Restaurant
        .findById(restaurant_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}
const saveRestaurant = (req, res, next) => {
    const { name, direction, phone, imageUrl } = req.body

    Restaurant
        .create({ name, direction, phone, imageUrl })
        .then(response => res.json(response))
        .catch(err => next(err))
}
const editRestaurant = (req, res, next) => {
    const { name, direction, phone, imageUrl } = req.body
    const { restaurant_id } = req.params

    Restaurant
        .findByIdAndUpdate(restaurant_id, { name, direction, phone, imageUrl })
        .then(response => res.json(response))
        .catch(err => console.log(err))
}
const deleteRestaurant = (req, res, next) => {
    const { restaurant_id } = req.params

    Restaurant
        .findByIdAndDelete(restaurant_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    getAllRestaurants,
    getOneRestaurant,
    saveRestaurant,
    editRestaurant,
    deleteRestaurant
}