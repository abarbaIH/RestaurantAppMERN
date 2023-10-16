const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Por favor, añade el nombre del restaurante'],
            trim: true,
            unique: true
        },
        direction: {
            type: String,
            required: [true, 'Por favor, añade la dirección del restaurante'],
            trim: true
        },
        phone: {
            type: String,
            required: [true, 'Por favor, añade un número de teléfono'],
            minlength: [9, "Introduce un teléfono correcto"],
            trim: true

        },
        imageUrl: {
            type: String,
        },
        // owner: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'User'
        // }
    },
    {
        timestamps: true
    }
);

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;
