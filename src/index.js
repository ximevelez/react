import React from 'react'; /* importar */
import ReactDOM from 'react-dom/client'; /* renderizar */
import './index.css'; /* importando los estilos */
import App from './App'; /* importa el nombre del componente funcional del archivo app */


const root = ReactDOM.createRoot(document.getElementById('root')); /* captura */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

