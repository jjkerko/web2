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
      <img src={apartment.picture} alt="apartment" />
      <h2>{apartment.description}</h2>
      <p>Prix: {apartment.price} Ariary</p>
    </div>
  );
};

export default ApartmentDetail;
/**Comment puis je relier tout les codes js que tu m'as envoyer et les afficher sur mon navigateur sachant très bien que je suis sur Api rest niveau back */