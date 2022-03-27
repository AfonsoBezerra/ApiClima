import styled from 'styled-components';

export const Input = styled.input`
    width: 20rem;
    height: 3rem;
    border-radius: 5px;
    background-color: transparent;
    border: none;
    text-align: center;
    font-size: 1rem;
    border-bottom: 2px solid #333;
    outline: 0;
    transition: all .5s;
    margin-top: 1rem;

    :focus{
      box-shadow:  0 2px 2px #333;
    }
  `;
