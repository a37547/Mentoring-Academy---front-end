import React from "react";
import novos_alunos from "../../assets/novos_alunos.jpg";
import { Row, Col, Image, Container } from "react-bootstrap";

const Capacitacao = () => {
  return (
    <Container className="my-3">
      <Row className="d-flex align-items-center justify-content-center">
        <h2 className="my-3">
          Capacitação científica, inovação e internacionalização
        </h2>
        <Col sm={12} md={6}>
          <div className="text-justify">
            <p>
              O IPB construiu o mais qualificado corpo docente do ensino
              superior politécnico português, atualmente com mais de 80% do seu
              corpo docente doutorado, e é hoje reconhecido a nível nacional e
              internacional pelo impacto e excelência da sua produção científica
              e investigação aplicada em várias áreas, como o atestam o
              U-Multirank, Scimago Institutions Rankings, Clarivate Analytics e
              Shanghai Ranking. Em 2019 esta excelência científica ficou
              atestada com a classNameificação dos seus Centros de Investigação,
              dois com a classNameificação de Bom e dois com a de Excelente,
              segundo a Fundação para a Ciência e Tecnologia, entidade máxima de
              acreditação e financiamento do sistema científico nacional.
            </p>
            <p>
              CoCriar Inovação é o lema do plano estratégico do IPB para o
              quadriénio 2018-2022 e sintetiza a visão de futuro que se
              ambiciona para a instituição. O IPB aspira afirmar-se como um
              ecossistema de cocriação de inovação, envolvendo a comunidade
              científica e os alunos em parcerias firmes com as empresas e as
              organizações, visando criar uma economia regional baseada no
              conhecimento e com forte articulação internacional.
            </p>
            <p>
              O IPB é hoje uma instituição multicultural onde 30% dos seus
              estudantes possuem nacionalidade não portuguesa, posicionando-se
              nas primeiras posições do ranking europeu U-Multirank e do
              Programa Erasmus+. Com igual relevância, 25% dos diplomados do IPB
              possuem experiência de mobilidade internacional durante a sua
              formação, percentagem já acima do objetivo da União Europeia para
              2020 (20%).
            </p>
            <p>
              <a
                href="http://www.ipb.pt"
                target="_blank"
                className="get-started-btn"
                rel="noopener noreferrer"
              >
                Mais informação sobre o IPB
              </a>
            </p>
          </div>
        </Col>
        <Col sm={12} md={6} className="d-flex justify-content-center">
          <Image fluid src={novos_alunos} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Capacitacao;
