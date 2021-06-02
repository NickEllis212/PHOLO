import React from 'react';
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom' //params are only usable in function components, gives access to params inside the url path


const testplaces = [
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
    {
        id: 'p1',
        title: 'Sahara Desert',
        description: 'Sand Dunes',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/deaceNXy23NF8VsCrwZPgn.jpg',
        address: 'Sarah Desert',
        location:{ 
            lat: 23.4162,
            lng: 25.6628
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Devon',
        description: 'CountrySide Walk',
        imageUrl: 'https://images.pexels.com/photos/158179/lake-constance-sheep-pasture-sheep-blue-158179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        address: 'Blacklands, Offwell, Honiton EX14 9RU',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    }
];




const UserPlaces = () => {
   const userId = useParams().userId;

   const loadedPlaces = testplaces.filter(place => place.creator === userId); //This will only display places from the user with the correct ID so it filters the places by user.
    return <PlaceList items={loadedPlaces}/>

    
}

export default UserPlaces;