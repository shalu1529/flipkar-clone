import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import { WishlistProvider } from './context/WishlistContext'; // Import WishlistProvider
import { AuthProvider } from './context/AuthContext';   // Import AuthContext

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <WishlistProvider> {/* Wrap the app with WishlistProvider */}
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </AuthProvider>
      </WishlistProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
