import styled from 'styled-components'



export const ContainerFooter = styled.div`
width: 100%;
position: fixed;
bottom: 0;
overflow: hidden;
background: #1d1e22;

h2{
  padding-bottom: 50px;
 } 

 .secction{
  width: 90%;
  height: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #495057;
}

.secction:hover {
  color: #adb5bd; 
}

`

export const SubContainer = styled.div`
  width: 93%;
  display: flex;
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 50px;

}
`

export const ContainerLeft = styled.div`
flex: 1;
color: #ffff;

p{
  color: #495057;
}
p:hover {
  color: #adb5bd; 
}
`

export const ContainerCenter = styled.div`
flex: 1;
color: #ffff;
`

export const ContainerRight = styled.div`
flex: 1;
color: #ffff;
`

export const ContainerBotton = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;

.p-footer{
  width: 50%;
  color: #495057;
  font-size: 15px; 
}
.p-footer:hover{
  color: #adb5bd; 
}


.Redes-sociais{
  width: 50%;
  display: flex;
  color: #495057;
  justify-content: center;
  padding-bottom: 25px;
}
`