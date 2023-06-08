import "./DetalhesOtimizacao.css";
import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import map from "../../images/map.png";
import homeicon from "../../images/homeicon.png";

const DetalhesOtimizacao = () => {
  const [time, setTime] = useState("");
  const [codigo, setCodigo] = useState("");
  const [servico, setServico] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let token =
    "1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=LX002249507BR";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.linketrack.com/track/json?user=teste&token=${token}`
        );
        const jsonData = await response.json();
        setErrorMessage(null);
        setTime(jsonData.time);
        setServico(jsonData.servico);
        setCodigo(jsonData.codigo);
      } catch (error) {
        setErrorMessage("ATENÇÃO: Muitos pedidos (API). Tente Novamente!");
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <Navigation />
      <h1>Otimização de Rotas</h1>
      <div className="subtitle-rotas">
        <p className="error-message">{errorMessage}</p>
        <p>Quarta, 7 Jun</p>
        <p>Código: {codigo}</p>
      </div>
      <div className="main">
        <img src={map} alt="Imagem Google Maps" className="map" />
        <div className="previsao">
          <h2>Previsão de chegada</h2>

          <ul>
            <li>
              <div className="info">
                <p>{servico}</p>
                <p className="from">xxxxxxxx de São Paulo</p>
              </div>
              <span>{time}</span>
            </li>
            <li>
              <div className="info">
                <p>{servico}</p>
                <p className="from">xxxxxxxx de São Paulo</p>
              </div>
              <span>{time}</span>
            </li>
            <li>
              <div className="info">
                <p>{servico}</p>
                <p className="from">xxxxxxxx de São Paulo</p>
              </div>
              <span>{time}</span>
            </li>
            <li>
              <div className="info">
                <p>{servico}</p>
                <p className="from">xxxxxxxx de São Paulo</p>
              </div>
              <span>{time}</span>
            </li>
            <li>
              <div className="info">
                <p>{servico}</p>
                <p className="from">xxxxxxxx de São Paulo</p>
              </div>
              <span>{time}</span>
            </li>
            <li>
              <div className="info">
                <p>{servico}</p>
                <p className="from">xxxxxxxx de São Paulo</p>
              </div>
              <span>{time}</span>
            </li>
          </ul>
          <div className="address">
            <img src={homeicon} alt="Ícone de casa" />
            <div className="address-info">
              <p>Endereço de entrega</p>
              <span>R. dos Gusmões, 124 -Jd. Maria dos Santos - RJ</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default DetalhesOtimizacao;
