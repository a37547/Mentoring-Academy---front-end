import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";

const CartaoEstudante = () => {
  return (
    <Row>
      <Col xs={12}>
        <h2>Cartão de Estudante do IPB</h2>
        <p>
          Durante o processo de matrícula será emitido o Cartão de Estudante do
          IPB, sendo tirada uma fotografia e impresso o cartão na hora.
        </p>
        <p>
          Este cartão é pessoal e intransmissível e está dotado de tecnologia
          sem fios RFID.
        </p>
        As principais funcionalidades do cartão são:
        <ListGroup>
          <ListGroup.Item>
            <li>
              Presenças eletrónicas (marcação de presença nas aulas por RFID)
            </li>
            <ListGroup.Item>
              - Passa o cartão no leitor na entrada da sala
            </ListGroup.Item>
            <ListGroup.Item>
              - Tens 10 minutos após o professor para passar o cartão e 15
              minutos se for no primeiro tempo (8H30/9H00 ou 14H00/14H30)
            </ListGroup.Item>
          </ListGroup.Item>

          <ListGroup.Item>
            <li>
              Senhas da Cantina (Confirmação da compra de senha na cantina)
            </li>
            <ListGroup.Item>
              - Passa o cartão no leitor RFID na caixa para confirmares que tens
              senha adquirida{" "}
            </ListGroup.Item>
          </ListGroup.Item>
          <ListGroup.Item>
            <li>Biblioteca (Requisição de livros na Biblioteca)</li>
          </ListGroup.Item>
          <ListGroup.Item>
            <li>
              Digitalização, cópia e impressão (Utilização das fotocopiadoras do
              IPB que estão disponíveis em todas as escolas)
            </li>{" "}
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
  );
};

export default CartaoEstudante;
