import "./SimulacaoDeConsumo.css";
import React from "react";
import Navigation from "../../components/Navigation/Navigation";
const SimulacaoDeConsumo = () => {
  return (
    <div>
      <Navigation />

      <h1>Simulação de consumo</h1>
      <p className="subtitle-simulacao">
        É importante que seu cliente conheça bem seu público-alvo para que você
        possa fazer a simulação de consumo
      </p>

      <section id="formulario">
        <form>
          <div className="form-group">
            <div className="esquerdo">
              <label htmlFor="quantidade">Quantidade de pessoas:</label>
              <select id="quantidade">
                <option value="" disabled selected></option>
                <option value="opcao1">10</option>
                <option value="opcao2">50</option>
                <option value="opcao3">100</option>
                <option value="opcao4">150</option>
                <option value="opcao5">200</option>
                <option value="opcao6">250</option>
              </select>

              <label htmlFor="media">Média de idade:</label>
              <input type="text" placeholder="" id="media" />

              <label htmlFor="cidade">Cidade:</label>
              <select id="cidade">
                <option value="" disabled selected></option>
                <option value="opcao1">São Paulo</option>
              </select>
            </div>

            <div className="direito">
              <label htmlFor="produtos">Principais Produtos:</label>
              <select className="produtos">
                <option value="" disabled selected></option>
                <option value="opcao1">Maçã</option>
                <option value="opcao2">Abacaxi</option>
                <option value="opcao3">Mamão</option>
                <option value="opcao4">Kiwi</option>
              </select>

              <select className="produtos">
                <option value="" disabled selected></option>
                <option value="opcao1">Cenoura</option>
                <option value="opcao2">Beterraba</option>
                <option value="opcao3">Abóbora</option>
                <option value="opcao4">Repolho</option>
              </select>

              <select className="produtos">
                <option value="" disabled selected></option>
                <option value="opcao1">Carne</option>
                <option value="opcao2">Peixe</option>
                <option value="opcao3">Frango</option>
              </select>
            </div>
          </div>
          <div>
            <button className="botao">Simular</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SimulacaoDeConsumo;
