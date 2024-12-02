import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import './input.css';
import './output.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Routes/Login.jsx";
import Welcome from "./Routes/Welcome.jsx";
import Cadastro from "./Routes/Cadastro.jsx";
import Agendamento from "./Routes/AgendamentoCliente.jsx"
import Agendar from "./Routes/Agendar.jsx";
import Home from "./Routes/Home.jsx"
import Historicos from "./Routes/Historicos.jsx"
import ConfirmarAgenda from "./Routes/ConfirmarAgenda.jsx"; 
import ProtectedRoute from './components/Protect/ProtecteRoute.jsx' 
import Perfil from "./Routes/TelaPerfil.jsx"
import Consultas from "./Routes/Consultas.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cadastra",
        element: <Cadastro />,
      },
      {
        path: "/home",
        element: < ProtectedRoute element={Home}/>,
      },
      {
        path: "/Agendar",
        element: <ProtectedRoute element={Agendar}  />,
      },
      {
        path: "/Agendamentos",
        element: < ProtectedRoute element={Agendamento} />,
      },
      {
        path: "/Historico",
        element: < ProtectedRoute element={Historicos} />,
      },
      {
        path: "/confirmar",
        element: < ProtectedRoute element={ConfirmarAgenda} />,
      },
      {
        path: "/perfil",
        element: < ProtectedRoute element={Perfil} />,
      },
      {
        path: "/consultas",
        element: < ProtectedRoute element={Consultas} />,
      },

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
