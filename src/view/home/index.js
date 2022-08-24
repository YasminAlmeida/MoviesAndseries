import React, { Component } from 'react';
import { ContainerHome, InputEmail, ButtonSubmit } from './styles.js';

class Home extends Component {
  render() {
    return (
      <ContainerHome>
        <h1>Movies, series and more. No Boundaries.</h1>
        <h3>
          Pronto para assistir? Informe seu email para criar ou reiniciar sua
          assinatura.
        </h3>
        <InputEmail
          type="email"
          name="email"
          value=""
          autocomplete="email"
          maxlength="50"
          minlength="5"
        ></InputEmail>
        <ButtonSubmit type="submit" autocomplete="off">
          Submit
        </ButtonSubmit>
      </ContainerHome>
    );
  }
}
export default Home;
