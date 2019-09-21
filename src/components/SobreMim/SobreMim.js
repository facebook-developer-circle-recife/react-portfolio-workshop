import React from "react";
import MinhaFoto from "../../images/eu.png";
import "./SobreMim.css";

class SobreMim extends React.Component {
  render() {
    return (
      <div className="sobre-mim-container">
        {/* Aqui vai ser a foto */}
        <div className="foto-container">
          <img
            className="foto-perfil"
            src={MinhaFoto}
            alt="Foto de perfil de Otacilio"
          ></img>
        </div>

        {/* Aqui vai ser o texto */}
        <div>
          <p>
            Eu sou Otacilio Maia, e estou fazendo um workshop de React.js curto
            bastante React, Javascript, ChatBots e outras coisas
          </p>
        </div>
      </div>
    );
  }
}

export default SobreMim;
