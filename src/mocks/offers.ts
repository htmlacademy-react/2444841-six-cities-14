import { TOffer } from '../types/index.ts';

export const offers: TOffer[] = [
  {
    city: {
      name: 'Cologne',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    previewImage: 'img/studio-01.jpg',
    images: [
      'img/studio-01.jpg',
      'img/room.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'img/room-small.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'img/apartment-01.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg'
    ],
    title: 'Hilarious and amazing city! Wonderful place',
    isFavorite: true,
    isPremium: false,
    rating: 2.1,
    type: 'room',
    bedrooms: 4,
    maxAdults: 99,
    price: 20,
    good: [
      'Laptop friendly workspace',
      'Breakfast',
      'Coffee',
      'Salt and pepper',
      'Fus-Roh-Dah'
    ],
    host: {
      id: 269,
      name: 'Alevtina',
      isPro: false,
      avatarUrl: 'img/avatar-max.jpg'
    },
    description: 'Ideal for families or friends. A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery.',
    location: {
      latitude: 51.237402,
      longitude: 6.779314,
      zoom: 16
    },
    id: '3'
  },
  {
    city: {
      name: 'Hamburg',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    previewImage: 'img/apartment-02.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'img/apartment-01.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'img/room-small.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'img/apartment-02.jpg',
      'img/studio-01.jpg',
      'img/room.jpg',
      'img/apartment-03.jpg'
    ],
    title: 'Unfortunately we are closed',
    isFavorite: false,
    isPremium: true,
    rating: 3.1,
    type: 'rancho',
    bedrooms: 19,
    maxAdults: 1,
    price: 2400,
    good: [
      'Go away!',
      'Bring friends',
      'Tea and sugar',
      'Clear blue water',
      'Built the road'
    ],
    host: {
      id: 344,
      name: 'James',
      isPro: true,
      avatarUrl: 'img/room.jpg'
    },
    description: 'Sorry we are closed! You are welcome!',
    location: {
      latitude: 51.237402,
      longitude: 6.779314,
      zoom: 16
    },
    id: '4'
  },
  {
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/3.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg'
    ],
    title: 'Waterfront with extraordinary view',
    isFavorite: false,
    isPremium: false,
    rating: 4.8,
    type: 'room',
    bedrooms: 1,
    maxAdults: 2,
    price: 142,
    good: [
      'Laptop friendly workspace',
      'Breakfast'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    location: {
      latitude: 51.237402,
      longitude: 6.779314,
      zoom: 16
    },
    id: '1'
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    good: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: '2',
    images: [
      'img/1.png'
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment'
  }
];