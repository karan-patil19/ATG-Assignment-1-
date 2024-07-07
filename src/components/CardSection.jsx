import React from 'react';
import Card from './Card';
import { FaUsers, FaMapMarkerAlt, FaShoppingBag, FaCalendarAlt } from 'react-icons/fa';
import './CardSection.css';  // Ensure the CSS file is imported

const CardSection = () => {
  return (
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-md-6">
          <Card 
            className="custom-card custom-card-people" 
            icon={<FaUsers className="text-purple mb-2" size={32} />} 
            title="People" 
            text="An Individual or Organization. Teacher, Coach, Professional or Online Seller. Company, Business or Association."
              
          />
        </div>
        <div className="col-md-6">
          <Card 
            className="custom-card custom-card-place" 
            icon={<FaMapMarkerAlt className="text-green mb-2 " size={32} />} 
            title="Place" 
            text="An Address. Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus."
            
          />
        </div>
        <div className="col-md-6">
          <Card 
            className="custom-card custom-card-product" 
            icon={<FaShoppingBag className="text-red mb-2" size={32} />} 
            title="Product" 
            text="An Item that you can Book, Buy or Rent. Appointment, Ticket, or Voucher. Equipment, Instrument or Activity Kit."
            
          />
        </div>
        <div className="col-md-6">
          <Card 
            className="custom-card custom-card-program" 
            icon={<FaCalendarAlt className="text-blue mb-2" size={32} />} 
            title="Program" 
            text="An Event with Venue and Date. Meetup, Workshop or Webinar. Exhibition, Performance or Competition."
             
          />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
