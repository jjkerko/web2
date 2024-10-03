import React, { useState } from 'react';

const ApartmentList = ({ apartments }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrer par prix et mot-clé dans la description
  const filteredApartments = apartments.filter(apartment => {
    const matchesPrice = (!minPrice || apartments.price >= minPrice) && (!maxPrice || apartments.price <= maxPrice);
    const matchesDescription = apartments.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesPrice && matchesDescription;
  });

  return (
    <div>
      <div>
        <input
          type="number"
          placeholder="Prix minimum"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Prix maximum"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Rechercher par description"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="apartment-list">
        {filteredApartments.map(apartment => (
          <div key={apartments.id} className="apartment-item">
            <img src={apartments.picture} alt="apartment" />
            <h3>{apartments.description}</h3>
            <p>Prix: {apartments.price} Ariary</p>
            <button onClick={() => handleDetailClick(apartments.id)}>Voir Détails</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApartmentList;

