import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
if (rootElement) {
    rootElement.render(
        <React.StrictMode>
                <App/>
        </React.StrictMode>
    );
} else {
    console.error("Root element not found.");
}
