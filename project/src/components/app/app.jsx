import React from 'react';
import PageMain from '../page-main/page-main.jsx';

const cards = [
  {
    id: 0,
    price: 120,
    imageUrl: 'img/apartment-01.jpg',
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    rating: 80,
  },
  {
    id: 1,
    price: 80,
    imageUrl: 'img/room.jpg',
    name: 'Wood and stone place',
    type: 'Private room',
    rating: 80,
  },
  {
    id: 1,
    price: 132,
    imageUrl: 'img/apartment-02.jpg',
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    rating: 80,
  },
  {
    id: 2,
    price: 180,
    imageUrl: 'img/apartment-03.jpg',
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    rating: 100,
  },
  {
    id: 3,
    price: 80,
    imageUrl: 'img/room.jpg',
    name: 'Wood and stone place',
    type: 'Private room',
    rating: 80,
  },
];

function App() {
  return <PageMain cards={ cards }/>;
}

export default App;
