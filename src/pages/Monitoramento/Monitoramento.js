import "./Monitoramento.css";
import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import Veiculo from "../../components/Veiculos/veiculo";

const Monitoramento = () => {
  return (
    <div>
      <Navigation />
      <h1>Monitoramento</h1>
      <Veiculo />
      <Veiculo />
      <Veiculo />
      <Veiculo />

      <Footer />
    </div>
  );
};

export default Monitoramento;
