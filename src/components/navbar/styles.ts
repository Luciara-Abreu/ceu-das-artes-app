import styled from "styled-components";
import Navbar from 'react-bootstrap/Navbar';

export const CustomNavbar = styled(Navbar)`
width: 100%;
font-size: 18px;
  @media screen and (max-width: 1000px) {
    .navbar-toggler {
      background-color: aliceblue;   
      order: 2; /* Altera a ordem do botão do menu sanduíche */
      margin-left: auto; /* Move o botão do menu sanduíche para o lado direito */
    }
    }
  }
`;

export const ContainerNavbar = styled(Navbar)`
width: 100%;


.bg-body-tertiary{
  background-color: #1d1e22!important;
}

.container-bootstrap{
  // margin: 3px!important;
} 
`

export const ContainerTitle = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: baseline;
padding-left: 15px;

.link{                     
  color: #fffefe!important;
 }
`

export const ContainerLinks = styled.div`
width: 100%;
display:flex;


.link{                     
  color: #fffefe!important;
  opacity: 0.7;
}

.link:hover{
  opacity: 1;
}  


 @media screen and (max-width: 1000px) {
  .button-collapse{
  background: aliceblue
  }
}
`

export const NavEnd = styled.div`
#basic-nav-dropdown{
  color: #fffefe!important;
  opacity: 1;
}

`