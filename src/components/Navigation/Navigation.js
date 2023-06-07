import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/monitoramento">Monitoramento</Link>
        </li>
        <li>
          <Link to="/otimizacaoderotas">Otimização de Rotas</Link>
        </li>
        <li>
          <Link to="/simulacaodeconsumo">Simulações de Consumo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
