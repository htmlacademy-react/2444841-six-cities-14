import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app.tsx';

type FlatInfo = {
  id: number;
  title: string;
  price: number;
  previewImage: string;
  desc: string;
};

const cities: string[] = ['Paris', 'Cologne', 'Brussels', 'Amstardam', 'Hamburg', 'Dusseldorf'];

const flatsArray: FlatInfo[] = [
  {
    id: 1,
    title: 'title 1',
    price: 100,
    previewImage: 'img/room.jpg',
    desc: 'desc1'
  },
  {
    id: 2,
    title: 'title 2',
    price: 200,
    previewImage: 'img/room.jpg',
    desc: 'desc2'
  },
  {
    id: 3,
    title: 'title 3',
    price: 300,
    previewImage: 'img/room.jpg',
    desc: 'desc3'
  },
  {
    id: 4,
    title: 'title 4',
    price: 400,
    previewImage: 'img/room.jpg',
    desc: 'desc4'
  },
  {
    id: 5,
    title: 'title 5',
    price: 500,
    previewImage: 'img/room.jpg',
    desc: 'desc5'
  }
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={flatsArray} cities ={cities}/>
  </React.StrictMode>
);
