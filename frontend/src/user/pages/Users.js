import React from 'react';
import UsersList from '../components/UsersList';


const Users = () => {
    const USERS = [{id: 'u1', 
    name: 'Nick Ells', 
    image: 'https://media.istockphoto.com/photos/young-woman-portrait-in-the-city-picture-id1009749608?k=6&m=1009749608&s=612x612&w=0&h=ckLkBgedCLmhG-TBvm48s6pc8kBfHt7Ppec13IgA6bo=', 
    places: 1},

    {id: 'u2', 
    name: 'Dederick, Sadler', 
    image: 'https://benjaminjurke.com/assets/images/authors/benjamin-jurke-v6.jpg', 
    places: 1},

    {id: 'u3', 
    name: 'Jasmin Davies', 
    image: 'https://stackabuse.s3.amazonaws.com/media/introduction-to-gans-with-python-2.jpg', 
    places: 3},

    {id: 'u4', 
    name: 'Nick Ells', 
    image: 'https://media.istockphoto.com/photos/young-woman-portrait-in-the-city-picture-id1009749608?k=6&m=1009749608&s=612x612&w=0&h=ckLkBgedCLmhG-TBvm48s6pc8kBfHt7Ppec13IgA6bo=', 
    places: 3},

    {id: 'u5', 
    name: 'Nick Ells', 
    image: 'https://media.istockphoto.com/photos/young-woman-portrait-in-the-city-picture-id1009749608?k=6&m=1009749608&s=612x612&w=0&h=ckLkBgedCLmhG-TBvm48s6pc8kBfHt7Ppec13IgA6bo=', 
    places: 3}



];
    


    return(
        
       <div >
           <h2 className="center" style={{color: "white", 
           fontFamily: "Marmelad", 
           fontWeight: "10px"}}>Users</h2>
        <div>
            <UsersList items={USERS}/>

        </div>
        </div>

        
    )
        

};

export default Users;