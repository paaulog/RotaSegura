import "./SimulacaoDeConsumo.css";
import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
const SimulacaoDeConsumo = () => {
  return (
    <div>
      <Navigation />

      <section>
        <h1>Simulação de consumo</h1>
        <h2>
          É importante que seu cliente conheça bem seu público alvo para que
          você possa fazer a simulação de consumo
        </h2>
      </section>

      <section id="formulario">
        <form>
          <label htmlFor="">
            <div>
              <select>
                <option value="" disabled selected>
                  Selecione uma opção
                </option>
                <option value="opcao1">Opção 1</option>
                <option value="opcao2">Opção 2</option>
                <option value="opcao3">Opção 3</option>
                <option value="opcao4">Opção 4</option>
                <option value="opcao5">Opção 5</option>
                <option value="opcao6">Opção 6</option>
              </select>

              <input type="text" placeholder="Média de Idade" />

              <select>
                <option value="" disabled selected>
                  Cidade
                </option>
                <option value="opcao1">Opção 1</option>
                <option value="opcao2">Opção 2</option>
                <option value="opcao3">Opção 3</option>
                <option value="opcao4">Opção 4</option>
                <option value="opcao5">Opção 5</option>
                <option value="opcao6">Opção 6</option>
              </select>
            </div>
            <div>
              <select>
                <p>Principais produtos</p>
                <option value="opcao1">Opção 1</option>
                <option value="opcao2">Opção 2</option>
                <option value="opcao3">Opção 3</option>
                <option value="opcao4">Opção 4</option>
                <option value="opcao5">Opção 5</option>
                <option value="opcao6">Opção 6</option>
              </select>
              <select>
                <option value="opcao1">Opção 1</option>
                <option value="opcao2">Opção 2</option>
                <option value="opcao3">Opção 3</option>
                <option value="opcao4">Opção 4</option>
                <option value="opcao5">Opção 5</option>
                <option value="opcao6">Opção 6</option>
              </select>
              <select>
                <option value="opcao1">Opção 1</option>
                <option value="opcao2">Opção 2</option>
                <option value="opcao3">Opção 3</option>
                <option value="opcao4">Opção 4</option>
                <option value="opcao5">Opção 5</option>
                <option value="opcao6">Opção 6</option>
              </select>
            </div>

            <button>Enviar</button>
          </label>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default SimulacaoDeConsumo;
