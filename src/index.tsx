import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app.tsx';
import { offers } from './mocks/offers.ts';
import { reviews } from './mocks/reviews.ts';
import { store } from './store/index.ts';
import { loadOffersCard } from './store/api-actions.ts';

store.dispatch(loadOffersCard());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} reviews={reviews}/>
    </Provider>
  </React.StrictMode>
);
