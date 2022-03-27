import styled from 'styled-components';

export const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  border: none;
  background: #333;
  color: #fff;
  margin-top: 2rem;
  border-radius: 5px;
  transition: .6s;
  :focus{
    outline: 0;
  }
  :hover{
    background: #338033;
    cursor: pointer;
    transform: scale(110%);
    :before{
      transform: translateX(300px)  skewX(-15deg);
      opacity: 0.6;
      transition: .7s;
    }
    :after{
      transform: translateX(300px) skewX(-15deg);
      opacity: 1;
      transition: .7s;
    }
  }
`;
