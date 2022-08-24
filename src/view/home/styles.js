import styled from 'styled-components';

export const ContainerHome = styled.nav`
  margin: 0 auto;
  max-width: 950px;
  padding: 75px 0;
  text-align: center;
  width: 100%;

  h1 {
    font-size: 3.125rem;
  }
  h3 {
    font-weight: 400;
    margin: 0 auto;
    max-width: 450px;
    margin-bottom: 20px;
  }
`;
export const InputEmail = styled.input`
   {
    border: 1px solid #eee;
    display: block;
    margin: 0 auto 0;
    padding: 5px;
    width: 50%;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background: #eee;
  }
`;
export const ButtonSubmit = styled.button`
  font-size: 1.2rem;
  font-family: var(--type-first);
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: #fb1;
  color: #764701;
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  margin-top: 20px;
`;
