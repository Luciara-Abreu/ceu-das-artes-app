import styled from 'styled-components'


const ContainerBorboleta = styled.div`
width: 20%;
margin: 0;
padding-bottom: 5%;

  .borboleta {
  width: 50px;
  height:50px;
  position: relative;
  overflow: hidden;
}

.borboleta img {
  width: 100%;
  height: 100%;
  transition: transform 0.8s ease-in-out;
}

.borboleta.abrir-asas img {
  transform: scaleX(-1);
}

    //-----------------------------------------------------------

    @media (max-width: 767px) {
      width: auto;
      height: auto;
      margin-bottom: 1%;
      padding: 0;

      .borboleta {
  width:30px;
  height:30px;
  position: relative;
  overflow: hidden;
}

.borboleta img {
  width: 100%;
  height: 100%;
  transition: transform 0.8s ease-in-out;
}

.borboleta.abrir-asas img {
  transform: scaleX(-1);
}
  }
  `

export {
  ContainerBorboleta
}
