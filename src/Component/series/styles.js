import styled from 'styled-components';
export const ContainerMovie = styled.section`
  h2 {
    line-height: 1;
    font-size: 3rem;
    margin: 1rem 0;
    position: relative;
    z-index: 1;
    margin-left: 20px;
  }

  h2:after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #fb1;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;
export const OptionsMovie = styled.section`
display:flex;
flex-direction:row;
ul{
  list-style:none;
  display: flex;
  min-height: 0;
  height: auto;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
}
}
`;
export const Img = styled.div`
  img {
    display: inline-block;
    width: 200px;
    height: 300px;
    border-radius: 4px;
    margin: 5px;
  }
`;
export const Percent = styled.div`
  span {
    background: #000;
    color: #fff;
    padding: 2px;
    border-radius: 50%;
    padding-left: 1px;
    font-size: 1em;
  }
`;
