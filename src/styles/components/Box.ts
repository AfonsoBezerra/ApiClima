import styled from 'styled-components';

export const Container = styled.div`
  width:  100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .containerCenter{
    width: 90%;
    height: 500px;
    border-radius: 10px;
    border: 1px solid black;
    box-shadow: 5px 5px 10px rgba(0,0,0, .4);
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    animation: fadein 1s ease-in-out;
    @media(min-width:1024px){
      width: 500px;
    }
    .main{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
        img{
           margin-left: .5rem;
           width: 120px;
        }
     }
  }
  .buttonBack{
    margin-top: 3rem;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    .linha{
        width: 125px;
        transition: all .5s;
        height: 2px;
        border: 0px solid #FFF;
        transform: scaleX(0);
      }
    :hover .linha {
    transition: all .5s;
    transform: scaleX(1);
    border: 1px solid #FFF;
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
