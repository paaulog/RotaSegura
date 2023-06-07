import "./OtimizacaoDeRotas.css";
import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Navigation/Navigation";
import VeiculoOtimizacao from "../../components/VeiculosOtimizacao/veiculoOtimizacao";

const OtimizacaoDeRotas = () => {
  return (
    <div>
      <Navigation />
      <h1>Otimização de Rotas</h1>
      <VeiculoOtimizacao />
      <VeiculoOtimizacao />
      <VeiculoOtimizacao />
      <VeiculoOtimizacao />
      <Footer />
    </div>
  );
};

export default OtimizacaoDeRotas;
