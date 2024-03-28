import { useEffect, useRef } from 'react';
import { ContainerBorboleta } from './styles';


const Borboleta: React.FC = () => {
  const borboletaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const borboleta = borboletaRef.current;

    const abrirAsas = () => {
      borboleta?.classList.add('abrir-asas');
    };

    const fecharAsas = () => {
      borboleta?.classList.remove('abrir-asas');
    };

    if (borboleta) {
      borboleta.addEventListener('mouseenter', abrirAsas);
      borboleta.addEventListener('mouseleave', fecharAsas);
    }

    return () => {
      if (borboleta) {
        borboleta.removeEventListener('mouseenter', abrirAsas);
        borboleta.removeEventListener('mouseleave', fecharAsas);
      }
    };
  }, []);

  return (
      <ContainerBorboleta>

          <div className="borboleta" ref={borboletaRef}>
            <img src="/images/borboleta.png" alt="Imagem de uma borboleta" />
          </div>

      </ContainerBorboleta>
  );
};

export default Borboleta;
