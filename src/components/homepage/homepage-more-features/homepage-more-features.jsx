import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const MoreFeatures = () => {
  return (
    <React.Fragment>
      <Row>
        <Col sm={12} className="text-center">
          <a href="https://doodle.com/poll/f4etdykg2igr9m9t" target="_blank">
            <h3>Funcionalidades da Plataforma (em desenvolvimento)</h3>
            <p>
              O sistema irá englobar funcionalidades nas perspectivas de tutor,
              mentor, tutorados, mentorados e coordenadores.
            </p>
          </a>
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={6}>
          <Card className="text-center">
            <Card.Title>
              <a
                href="https://doodle.com/poll/f4etdykg2igr9m9t"
                target="_blank"
              >
                ICON
              </a>
            </Card.Title>
            <Card.Title>Conexão entre as partes</Card.Title>
            <Card.Text>
              Mentores e mentorados assim como tutores e tutorados poderão
              trocar mensagens entre si.
            </Card.Text>
          </Card>
        </Col>
        <Col sm={12} lg={6}>
          <Card className="text-center">
            <Card.Title>
              <a
                href="https://doodle.com/poll/f4etdykg2igr9m9t"
                target="_blank"
              >
                ICON
              </a>
            </Card.Title>

            <Card.Title>Marcação de reuniões</Card.Title>
            <Card.Text>
              O sistema permitirá o agendamento de reuniões entre as partes.
            </Card.Text>
          </Card>
        </Col>
        <Col sm={12} lg={6}>
          <Card className="text-center">
            <Card.Title>
              <a
                href="https://doodle.com/poll/f4etdykg2igr9m9t"
                target="_blank"
              >
                ICON
              </a>
            </Card.Title>

            <Card.Title>Material de apoio</Card.Title>
            <Card.Text>
              Mentores e tutores poderão disponibilizar material de apoio aos
              mentorados e tutorados, respectivamente.{" "}
            </Card.Text>
          </Card>
        </Col>

        <Col sm={12} lg={6}>
          <Card className="text-center">
            <Card.Title>
              <a
                href="https://doodle.com/poll/f4etdykg2igr9m9t"
                target="_blank"
              >
                ICON
              </a>
            </Card.Title>

            <Card.Title>Atividades, palestras e workshops</Card.Title>
            <Card.Text>
              Serão disponibilizados atividades, palestras e workshops de
              desenvolvimento pessoal e de soft skills.
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default MoreFeatures;
