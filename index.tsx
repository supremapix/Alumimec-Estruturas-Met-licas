import React from 'react';
import ReactDOM from 'react-dom/client';
import { hydrate, render } from 'react-dom';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const AppComponent = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrate(AppComponent, rootElement);
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(AppComponent);
}