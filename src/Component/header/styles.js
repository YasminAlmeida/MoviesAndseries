import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  lign-items: center;
  justify-content: space-between;
  ul {
    list-style: none;    
    margin-top:20px;
    display:flex
  }
  a {
    margin:5px;

    text-decoration: none;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background: #fb1;
    color: #764701;
    min-width: 8rem;
    padding: 0.4rem 1rem;
    font-size: 1rem;
  a:hover {
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }
`;
export const Figure = styled.figure`
  margin: 0;
  padding: 5px;
  img {
    width: 60px;
    height: 60px;
  }
`;
