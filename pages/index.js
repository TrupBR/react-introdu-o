import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Cabecalho from '../components/Cabecalho';
import Pagina from '../components/Pagina';

export default function Home() {
  return (
    <>
      <Pagina />

      <Cabecalho />
      <div className='bg-secondary py-3 text-white text-center mb-3'>
        <Container>
          <h1>Página Inicial</h1>
        </Container>
      </div>
      <h1>Hello World</h1>
      <div style={{ width: '100%' }} className='bg-secondary position-fixed bottom-0 py-3 text-white text-center'>
        <p>todos os direitos reservados</p>
      </div>



    </>
  )
}

