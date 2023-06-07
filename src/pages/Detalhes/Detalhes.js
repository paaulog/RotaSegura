import "./Detalhes.css";
import React from "react";
import BoxInf from "../../components/BoxInf/BoxInf";
import BoxInf2 from "../../components/BoxInf2/BoxInf2";
import BoxInf3 from "../../components/BoxInf3/BoxInf3";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
const Detalhes = () => {
  return (
    <div>
      <Navigation />
      <h1>Monitoramento</h1>
      <p id="modeloPlaca">Modelo: xxx</p>
      <p id="modeloPlaca2">Placa: xxx-xxxx</p>
      <div className="indicadores">
        <BoxInf3 />
        <BoxInf2 />
        <BoxInf />
      </div>
      <h2 id="alimentos">Alimentos Transportados</h2>
      <table>
        <tr>
          <th>Tipo</th>
          <th>Nome</th>
          <th>Peso</th>
        </tr>
        <tr>
          <td>Fruta</td>
          <td>Abacaxi</td>
          <td>15KG</td>
        </tr>
        <tr>
          <td>Legume</td>
          <td>Tomate</td>
          <td>33KG</td>
        </tr>
        <tr>
          <td>verdura</td>
          <td>couve</td>
          <td>20KG</td>
        </tr>
      </table>

      <div Class="artigos">
        <article>
          <h2>Informações sobre umidade</h2>

          <p>
            {" "}
            A umidade relativa do ar também afeta a qualidade do produto. A
            umidade muito baixa produz a desidratação (murchamento) do vegetal.
            Pelo contrário, se for muito alta os problemas com as podridões
            aumentam. Para a maioria das frutas e/ou hortaliças recomenda-se
            alta umidade relativa do ar, em torno de 90-95%. Por outro lado, o
            ar deve ter uma velocidade ideal de circulação, para manter a
            temperatura uniforme.
          </p>
        </article>
        <BoxInf3 className="boxinf" />
      </div>
      <div Class="artigos">
        <article>
          <h2>Informações sobre temperatura</h2>

          <p>
            A temperatura é responsável por aproximadamente 70% de uma boa
            conservação. Existe uma temperatura específica para cada espécie de
            fruta e/ou hortaliça, por isso é importante não interromper nunca a
            cadeia do frio. Uma variação de 1°C ou 2°C acima ou abaixo a
            temperatura recomendada é muito prejudicial para a qualidade da
            fruta e/ou hortaliça. O empilhamento adequado e a circulação de ar
            apropriada na câmara fria ajuda a diminuir as flutuações de
            temperatura. Algumas frutas e/ou hortaliças são armazenadas a baixa
            temperatura, em torno de 0ºC a 1°C como maçã, pera, pêssego, uvas,
            morango, ameixa, mirtilo, alho, alface, aspargo, cenoura, beterraba,
            dentre outros; Outras são armazenadas a temperaturas intermediarias
            entre 3°C e 8°C como a laranja, bergamota e vagem; outras são
            armazenadas em altas temperaturas, entre 10°C e 14°C como banana,
            mamão, lima, limão, manga, pepino, pimentão, abóbora dentre outras.
          </p>
        </article>
        <BoxInf className="boxinf" />
      </div>
      <Footer />
    </div>
  );
};

export default Detalhes;
