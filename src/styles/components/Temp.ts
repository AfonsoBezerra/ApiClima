import styled from 'styled-components';

export const Temp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  h2{
    font-size: 1.5rem;
    color: white;
    margin-bottom: 1rem;
  }
  .tempMaxMin{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
      font-size: 1.4rem;
    }
    h3{
      color: white;
    }
  }
`;
