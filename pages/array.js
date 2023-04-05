import Pagina from '../components/Pagina';
import { Container } from 'react-bootstrap';

const array = () => {

  const carros = ['Civic', 'Tucson', 'Celta', 'Tempra', 'Marea', 'Doblo']

  const pessoa= {
    nome:'Bruno',
    idade: 27,
    telefone: '(61) 98164-0414'
  }
  return (
      <>
        <Pagina titulo="Arrays">
         <Container>

            {carros.map(item => (
                <li>{item}</li>
            ))}

          <div>{carros[0]}</div>
          <div>{carros[1]}</div>
          <div>{carros[2]}</div>
          <div>{carros[3]}</div>
          <div>{carros[4]}</div>
          <div>{carros[5]}</div>
         </Container>
        </Pagina>
      </>
  )
}
