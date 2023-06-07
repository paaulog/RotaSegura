import "./Home.css";
import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import dev from "../../images/Dev.png";
import cadastroApp from "../../images/CadastroAPP.png";
import cadastrosistema from "../../images/CadastroSistema.png";
import integra from "../../images/VoceIntegra.png";

const Home = () => {
  return (
    <>
      <Navigation />
      <main>
        <section id="parte1">
          <div>
            <h1 class="Titulos">
              Acompanhe o envio e entrega de seus alimentos.
            </h1>
            <h2>
              Te ajudamos a manter o controle de sua carga de forma sustentável,
              evitando futuros desperdício.
            </h2>
          </div>
          <img src={dev} alt="Arte de uma pessoa" />
        </section>
        <section id="texto">
          <h2 class="ComoFunciona">Como funciona?</h2>
          <hr />
        </section>
        <section id="Imagens">
          <img
            class="Icones"
            src={cadastrosistema}
            alt="Você se cadastra no nosso sistema."
          />
          <img
            class="Icones"
            src={integra}
            alt="Você integra com nosso sistema"
          />
          <img
            class="Icones"
            src={cadastroApp}
            alt="Você se cadastra no nosso app"
          />
        </section>
        <section id="parte3">
          <h2>Entre em contato conosco!</h2>
          <h3>
            Insira seu email no campo abaixo, em até 48 horas entraremos em
            contato com você ou sua empresa.
          </h3>
          <label for="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ex: contato@email.com"
          />
          <button type="submit" id="BtnEnviar" name="Enviar">
            Enviar
          </button>
        </section>
        <section id="parte4">
          <div id="vantagens">
            <hr />
            <h3>Conheça as vantagens de usar da logística sustentável</h3>
            <hr />
          </div>

          <div id="lista">
            <div class="ItensLista">
              <span class="numerosLista">1º</span> Sua logística fica organizada
              e concentrada em uma única aplicação
            </div>
            <div class="ItensLista">
              <span class="numerosLista">2º</span> Sua logística fica organizada
              e concentrada em uma única aplicação
            </div>
            <div class="ItensLista">
              <span class="numerosLista">3º</span> Sua logística fica organizada
              e concentrada em uma única aplicação
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
