import { useNavigate } from 'react-router-dom';

const ApartmentList = ({ apartments }) => {
  const navigate = useNavigate();

  const handleDetailClick = (id) => {
    navigate(`/apartments/${id}`);
  };

};
const express = require('express');
const app = express();
const PORT = 4000;

const apartments = [
  { id: 1, description: "Appartement avec 2 chambres", price: 800 },
  { id: 2, description: "Studio au centre-ville", price: 600 },
];
/* Les divers Requettes */
app.get('/api/apartments', (req, res) => {
  res.json(apartments);
});

app.get('/api/apartments/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const apartment = apartments.find(ap => ap.id === id);
  if (apartment) {
    res.json(apartment);
  } else {
    res.status(404).json({ error: "Appartement non trouvé" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


