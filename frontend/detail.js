import React from 'react';
import { useParams } from 'react-router-dom';

const ApartmentDetail = ({ apartments }) => {
  const { id } = useParams();
  const apartment = apartments.find(a => a.id === parseInt(id));

  if (!apartment) {
    return <div>Appartement non trouvé</div>;
  }

  return (
    <div>
      <img src={apartments.picture} alt="apartment" />
      <h2>{apartments.description}</h2>
      <p>Prix: {apartments.price} Ariary</p>
    </div>
  );
};

export default ApartmentDetail;
