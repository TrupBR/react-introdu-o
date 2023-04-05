import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecalho from './Cabecalho'

const Pagina = () => {
    return (
        <>
            <Cabecalho />
            <div className='bg-secondary py-3 text-white text-center mb-3'>
                <Container>
                    <h1>Página Inicial</h1>
                </Container>
            </div>
        </>
    )
}

export default Pagina