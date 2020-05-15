import React, { useState } from "react";
import { Row, Col, ListGroup, Container, Collapse } from "react-bootstrap";

const Faq = () => {
  const [openFaq1, setOpenFaq1] = useState(false);

  return (
    <Container>
      <Row>
        <Col sz={12} className="text-center">
          <h3 className="section-title">Perguntas frequentes</h3>
        </Col>
      </Row>
      <Row className="my-4">
        <Col sz={12}>
          <ListGroup>
            <ListGroup.Item>
              <a
                onClick={() => setOpenFaq1(!openFaq1)}
                aria-controls="faq1"
                aria-expanded={openFaq1}
              >
                Como posso inscrever-me como tutor?{" "}
                <i className="ion-android-remove"></i>
              </a>
              <Collapse in={openFaq1} className="mt-2">
                <div id="faq1">
                  <p>
                    Poderá fazer a sua inscrição clicando neste{" "}
                    <a
                      href="http://inqueritos.ipb.pt/?r=survey/index/sid/465916/lang/pt"
                      target="_blank"
                    >
                      link
                    </a>
                  </p>
                </div>
              </Collapse>
            </ListGroup.Item>
            <ListGroup.Item>
              <a data-toggle="collapse" className="collapsed" href="#faq2">
                Onde posso candidatar-me a mentor?{" "}
                <i className="ion-android-remove"></i>
              </a>
              <div id="faq2" className="collapse" data-parent="#faq-list">
                <p>
                  Poderá fazer a sua inscrição clicando neste{" "}
                  <a
                    href="href=http://inqueritos.ipb.pt/?r=survey/index/sid/571475/lang/pt"
                    className="link-faq"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    link
                  </a>
                </p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <a data-toggle="collapse" className="collapsed" href="#faq3">
                Os mentorados necessitam de se inscrever?{" "}
                <i className="ion-android-remove"></i>
              </a>
              <div id="faq3" className="collapse" data-parent="#faq-list">
                <p>
                  Não. Será atríbuido um mentor a todos os novos alunos do IPB.
                </p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <a data-toggle="collapse" href="#faq4" className="collapsed">
                Mentores e tutores, ao participares no programa receberão algum
                certificado? <i className="ion-android-remove"></i>
              </a>
              <div id="faq4" className="collapse" data-parent="#faq-list">
                <p>
                  No final do programa todos os tutorandos, mentorandos,
                  mentores e tutores receberão um certificado de participação. A
                  participação no programa como tutor ou mentor é uma atividade
                  que integra o Suplemento ao Diploma.
                </p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <a data-toggle="collapse" href="#faq5" className="collapsed">
                Como posso inscrever-me nas ações de formação contínua destinada
                a docentes? <i className="ion-android-remove"></i>
              </a>
              <div id="faq5" className="collapse" data-parent="#faq-list">
                <p>
                  As ações de formação contínua e oficinas colaborativas serão
                  anunciadas através do email geral do IPB. No anuncio será
                  indicado o link para a inscrição.
                </p>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;
