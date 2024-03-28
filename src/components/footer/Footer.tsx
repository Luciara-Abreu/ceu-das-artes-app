import Contacts from "../contacts/Contacts"
import { ContainerBotton, ContainerCenter, ContainerFooter, ContainerLeft, ContainerRight, SubContainer } from "./styles"


function Footer() {
  return (
    <ContainerFooter>
      <SubContainer>
        <ContainerLeft>
          <div> <h2>Sobre</h2>
            <p>
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </ContainerLeft>
        <ContainerCenter>
          <h2>Categorias</h2>
          <div className='secction'>link rede solcial 1  </div>
          <div className='secction'>link rede solcial 2  </div>
          <div className='secction'>link rede solcial 3  </div>
          <div className='secction'>link rede solcial 4 </div>
        </ContainerCenter>


        <ContainerRight>
          <h2>Links Redes Sociais</h2>
          <div className='secction'>link rede solcial 1  </div>
          <div className='secction'>link rede solcial 2  </div>
          <div className='secction'>link rede solcial 3  </div>
          <div className='secction'>link rede solcial 4 </div>
        </ContainerRight>
      </SubContainer>

      <ContainerBotton>
        <div className="p-footer">
          Criado por Luci Abreu ©2024. Todos os direitos reservados.
        </div>

        <div className="Redes-sociais">
          <Contacts />
        </div>

      </ContainerBotton>

    </ContainerFooter>
  )
}

export default Footer