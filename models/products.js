const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    category: {
        type: String,
        required: [true, 'Please enter product category'],
        maxLength: [100, 'Category nahttp://res.cloudinary.com/vannam/image/upload/v1633346297/samples/32-325559_flowers-most-creative-desktop-hd-wallpapers_l0qr6n.jpgme cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price'],
        maxLength: [10, 'Product price cannot exceed 10 characters'],
        default: 0.0

    },
    artist: {
        type: String,
        required: [true, 'Please enter artist name'],
        maxLength: [100, 'Artist name cannot exceed 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please enter product description'],
        
    },
    images:[ {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }
    ],
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }  
})

module.exports = mongoose.model('Product', productSchema);