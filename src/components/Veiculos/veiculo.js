import React from "react";
import "./veiculo.css";
import trucker from "../../images/trucktime.png";
import seta from "../../images/seta.png";
import { Link } from "react-router-dom";

const Veiculo = () => {
  return (
    <div className="container">
      <img src={trucker} alt="Desenho de um Caminhão" /> <p>Modelo: Placa:</p>{" "}
      <Link to="/detalhes">
        <img src={seta} alt="Seta" />
      </Link>
      {}
    </div>
  );
};

export default Veiculo;
