const HttpError = require('../models/errors')

const test_places = [
    {
        id: 'p1',
        title: 'New york',
        description: 'City View',
        imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        address: '20 W 34th st, New York, NY 10001',
        location:{ 
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
]


const getPlaceById = (req, res, next) => {
    const placeId = req.params.pid
    const place = test_places.find(p => {
        return p.id === placeId
    });

    if (!place) {
        throw new HttpError('No plave found for the provided id', 404);
      

    }
    res.json({place});
}

const getPlaceByUserId = (req, res, next) => {
    const userId = req.params.uid;

    const place = test_places.find(p =>{
        return p.creator ===userId;
    })

    if (!place) {
     return next (
         new HttpError('No plave found for the provided user id')
         )
 
     }
    res.json({place})
}

const createPlace = (req, res, next) => {
    const { title, description, coordinates, address, creator }= req.body;

    const createdPlace = {
        title,
        description,
        location: coordinates,
        address,
        creator
    }

    test_places.push(createdPlace);

    res.status(201).jason({place: createdPlace})
}
exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;