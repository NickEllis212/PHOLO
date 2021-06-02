import React, { useState, useContext } from 'react';
import {LoginContext} from '../../shared/context/login-context'
import Button from '../../shared/FormElements/Button'
import Modal from '../../shared/components/UIElements/Modal';
import './PlaceItem.css';
import PlaceListCard from '../../shared/components/UIElements/PlaceListCard';
import Map from '../../shared/components/UIElements/Map'

const PlaceItem = props => {
  const login = useContext(LoginContext);
  const [showMap, setShowMap] = useState(false);

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const showDeleteWaningHandler = () => {
    setShowConfirmModal(true);
  }


const cancelDeleteHandler = () => {
  setShowConfirmModal(false);
}

const confirmDeleteHnadler = () => {
  setShowConfirmModal(false);
    console.log('Deleting');
}
  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler} 
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>close</Button>} //use the closemaphandler aswell as a button to close the map
      >{/*takes oncancel from modal and uses it here*/}
        <div className="map-container">
          <Map center={props.coordinates} zoom={16}/>
        </div>
      </Modal>
      <Modal 
      show={showConfirmModal}
      onCancel={cancelDeleteHandler}
      header="Are you sure?" 
      footerClass="place-item__modal-actions" 
      footer={
        <React.Fragment>
          <Button inverse  onClick={cancelDeleteHandler}>Cancel</Button>
          <Button danger onClick ={confirmDeleteHnadler} >Delete</Button>
        </React.Fragment>
      }>
        <p>
          Are sure you want to delete this place?
        </p>
      </Modal>
      <li className="place-item">
        <PlaceListCard className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} /> {/*extracts properties from userplaces */ }
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button onClick={openMapHandler}>View</Button>
            {login.isLoggedIn &&
            <Button to={`/places/${props.id}`}>Edit</Button>}
            {login.isLoggedIn &&
            <Button danger onClick={showDeleteWaningHandler}>Delete</Button>}
            <Button>Like</Button>
          </div>
        </PlaceListCard>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
