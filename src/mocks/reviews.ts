import { TReviews } from '../types/index.ts';

export const reviews: TReviews[] = [
  {
    id: '1',
    user: {
      id: 15,
      isPro: false,
      name: 'Kendall',
      avatarUrl: 'https://14.react.pages.academy/static/avatar/6.jpg'
    },
    rating: 4,
    comment: 'Home is amazing. Its like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
    date: '2023-10-02T09:23:20.316Z'
  },
  {
    id: '2',
    user: {
      id: 16,
      isPro: true,
      name: 'Kim',
      avatarUrl: 'https://14.react.pages.academy/static/avatar/5.jpg'
    },
    rating: 3,
    comment: 'Home is not amazing. Its like staying in a closet. The rooms, furnishings and artworks are aweful. The views of another house wall',
    date: '2022-04-05T09:23:20.316Z'
  },
  {
    id: '3',
    user: {
      id: 17,
      isPro: false,
      name: 'Ryan',
      avatarUrl: 'https://14.react.pages.academy/static/avatar/4.jpg'
    },
    rating: 1,
    comment: 'Very cold and nice place. I like taking shower of ice cubes and sleeping under the window.',
    date: '2023-01-01T09:23:20.316Z'
  },
  {
    id: '4',
    user: {
      id: 18,
      isPro: true,
      name: 'Barbie',
      avatarUrl: 'https://14.react.pages.academy/static/avatar/3.jpg'
    },
    rating: 5,
    comment: 'No matter where I am, I like this place.',
    date: '2023-07-08T09:23:20.316Z'
  }
];
