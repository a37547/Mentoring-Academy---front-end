import React from "react";
import { Row, Col, ListGroup, Container } from "react-bootstrap";

const CartaoEstudante = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h2>Cartão de Estudante do IPB</h2>
          <p>
            Durante o processo de matrícula será emitido o Cartão de Estudante
            do IPB, sendo tirada uma fotografia e impresso o cartão na hora.
          </p>
          <p>
            Este cartão é pessoal e intransmissível e está dotado de tecnologia
            sem fios RFID.
          </p>
          As principais funcionalidades do cartão são:
          <ListGroup className="my-4">
            <ListGroup.Item>
              <h5>
                Presenças eletrónicas (marcação de presença nas aulas por RFID)
              </h5>

              <p>- Passa o cartão no leitor na entrada da sala</p>
              <p>
                - Tens 10 minutos após o professor para passar o cartão e 15
                minutos se for no primeiro tempo (8H30/9H00 ou 14H00/14H30)
              </p>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="my-4">
            <ListGroup.Item>
              <h5>
                Senhas da Cantina (Confirmação da compra de senha na cantina)
              </h5>
              <p>
                - Passa o cartão no leitor RFID na caixa para confirmares que
                tens senha adquirida
              </p>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="my-4">
            <ListGroup.Item>
              <h5>Biblioteca (Requisição de livros na Biblioteca)</h5>
              <p>
                Digitalização, cópia e impressão (Utilização das fotocopiadoras
                do IPB que estão disponíveis em todas as escolas)
              </p>
            </ListGroup.Item>
          </ListGroup>
          <p>
            Para usar os serviços pagos associados ao cartão, cantina e
            cópias/impressão, é necessário carregar saldo nos serviços Online:{" "}
            <a href="www.online.ipb.pt" target="_blank">
              www.online.ipb.pt
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default CartaoEstudante;
