import styled from 'styled-components';

export const MainStyle = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-image: url('/355538.jpg');
  background-size: cover;
  align-items: center;
  flex-direction: column;
  form {
  width: 90%;
  height: 300px;
  border-radius: 10px;
  border: 1px solid black;
  box-shadow: 5px 5px 10px rgba(0,0,0, .4);
  background-color: rgba(255, 255, 255, .8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  animation: fadein 1s ease-in-out;
  @media (min-width: 1024px){
    width: 450px;
  }
  .icon{
    position: absolute;
    width: 10rem;
    height: 5rem;
    border-radius: 50%;
    background-color: black;
    z-index: 99;
    width: 80px;
    top: 0;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
           img{
             width: 50px;
             height: 45px;
            }
        }
  }
  @keyframes fadein {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
`;
