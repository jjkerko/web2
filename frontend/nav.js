import { useNavigate } from 'react-router-dom';

const ApartmentList = ({ apartments }) => {
  const navigate = useNavigate();

  const handleDetailClick = (id) => {
    navigate(`/apartment/${id}`);
  };

};
