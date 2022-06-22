import { Email } from '@material-ui/icons'
import React from 'react'
import {img_300, unavailable} from "../../config/config"
import './SingleContent.css';
import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({
  id,
  name,
  poster,
  image,
  adderss,
  place,
  Time,
  Content


}) => {
  return (
    <ContentModal id={id}>
  
    
    <div className='media'>
      

     <img
        className="poster"
        src={image} 
        alt={name}
      />
      <b className='title'>{name}</b>
      <span className='subTitle'>

        <span className='subTitle'>{Time}</span>
        {/* <img src={image} alt=""/> */}
      </span>
    </div>
    </ContentModal>
  );
};


export default SingleContent