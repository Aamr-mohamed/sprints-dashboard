import React from 'react';
import ReactDOM from 'react-dom/client';
import "react-toastify/dist/ReactToastify.css";
import './index.css';
import App from './App';
import { ToastContainer, Slide } from "react-toastify"
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ToastContainer transition={Slide} />
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
