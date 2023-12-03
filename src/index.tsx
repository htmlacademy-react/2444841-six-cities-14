import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app.tsx';
import { store } from './store/index.ts';
import { login } from './store/api-actions.ts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(login());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>
);
