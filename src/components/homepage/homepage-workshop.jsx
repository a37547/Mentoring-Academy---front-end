import React from "react";
import students4 from "../../assets/students4.jpg";
import { Row, Image, Col, ListGroup, Container } from "react-bootstrap";

const Workshop = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} className="d-flex justify-content-center p-0">
          <Image fluid src={students4} alt="" />
        </Col>
      </Row>
      <Row className="my-4">
        <Col xs={12}>
          <h2>Workshops Mentoring Academy</h2>
          Workshops destinados aos estudantes para o desenvolvimento de
          competências transversais fundamentais para o mercado de trabalho
          (soft skills).<p></p>
          <h4>Próximos Workshops:</h4>
          <h6>
            10/03/2020 - Workshop Gestão do tempo e organização do trabalho -
            Prof. Doutora Ana Veloso - Universidade do Minho (Vagas esgotadas).
          </h6>
          <p>
            Inscrições Encerradas. Poderá inscrever-se em uma próxima edição do
            workshop em:{" "}
            <a href="http://bit.ly/2Tv5zrY" target="_blank">
              http://bit.ly/2Tv5zrY
            </a>
          </p>
          <p>
            Neste workshop orientado para a organização do tempo, realizar-se-á
            uma análise individual da gestão de vida considerando a perspectiva
            pessoal (vida privada) e a perspectiva de trabalho (vida
            profissional). Destinando-se a alunos do ensino superior, o trabalho
            será operacionalizado pelo estudo. Pretende-se que no final os
            participantes possam organizar o seu tempo considerando um balanço
            optimizado entre vida privada e vida profissional (de estudo).
          </p>
          <h4>Objectivos</h4>
          No final desta acção, os formandos serão capazes de:
          <Col lg={6} className="p-0">
            <ListGroup className="my-3">
              <ListGroup.Item>
                1. Elaborar objectivos operacionais
              </ListGroup.Item>
              <ListGroup.Item>
                2. Elaborar um plano de trabalho (mensal, semanal e diário) em
                função de: tarefas primárias e secundárias e objectivos de
                desempenho traçados.
              </ListGroup.Item>
            </ListGroup>

            <h4>Programa</h4>
            <p>- Análise do trabalho considerando:</p>
            <ListGroup className="my-3">
              <ListGroup.Item>• tarefas importantes/primárias</ListGroup.Item>
              <ListGroup.Item>• tarefas secundárias</ListGroup.Item>
              <ListGroup.Item>• tarefas urgentes</ListGroup.Item>
              <ListGroup.Item>• tarefas repetidas</ListGroup.Item>
              <ListGroup.Item>• tarefas criticas</ListGroup.Item>
              <ListGroup.Item>• objectivo da função</ListGroup.Item>
              <ListGroup.Item>
                - Elaboração de objectivos operacionais
              </ListGroup.Item>
              <ListGroup.Item>
                - Definição do plano de desenvolvimento de competências de apoio
                à realização de objectivos:
              </ListGroup.Item>
              <ListGroup.Item>
                • Levantamento de interesses e de competências.
              </ListGroup.Item>
              <ListGroup.Item>- Organização do trabalho</ListGroup.Item>
              <ListGroup.Item>
                • Definir prioridades (vida privada e trabalho)
              </ListGroup.Item>
              <ListGroup.Item>• Definição do plano de trabalho</ListGroup.Item>
            </ListGroup>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Workshop;
