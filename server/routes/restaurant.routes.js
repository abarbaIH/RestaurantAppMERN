const router = require("express").Router()

const Restaurant = require('./../models/Restaurant.model')

const {
    getAllRestaurants,
    getOneRestaurant,
    saveRestaurant,
    editRestaurant,
    deleteRestaurant
} = require('./../controllers/restaurant.controllers')

router.get("/getAllRestaurants", getAllRestaurants)

router.get("/getOneRestaurant/:restaurant_id", getOneRestaurant)

router.post("/saveRestaurant", saveRestaurant)

router.put("/:restaurant_id/edit", editRestaurant)

router.delete("/:restaurant_id/delete", deleteRestaurant)

module.exports = router