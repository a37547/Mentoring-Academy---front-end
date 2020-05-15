import React from "react";
import OrlandoRodrigues from "../../assets/OrlandoRodrigues.png";
import { Jumbotron, Image, Row, Col } from "react-bootstrap";

const Welcome = () => {
  return (
    <Jumbotron>
      <Row className="d-flex justify-content-center">
        <Col xs={9}>
          <h3>Bem-vindo ao Instituto Politécnico de Bragança</h3>
          <Image src={OrlandoRodrigues} alt="" />
          <p>Caros novos alunos do IPB,</p>
          <p>
            Contamos convosco para fazer do Instituto Politécnico de Bragança
            uma instituição ainda melhor no ano letivo que agora começa.
          </p>
          <p>
            Conhecemos o vosso valor, sabemos que tiveram um percurso de sucesso
            para chegar aqui e estamos muito orgulhosos da escolha que fizeram.
          </p>
          <p>
            Tudo faremos para que a vossa vida no IPB seja agradável,
            entusiasmante e inspiradora.
          </p>
          <p>
            Porque escolheram o Instituto Politécnico de Bragança, sabem
            certamente que passaram a integrar uma instituição muito especial. O
            Instituto Politécnico mais prestigiado do País, como todos os
            rankings internacionais o demonstram, e uma instituição que, em
            diversas áreas disciplinares, surge entre as melhores do mundo. Este
            reconhecimento internacional é uma garantia do valor do vosso futuro
            diploma, de elevada empregabilidade e de valorização pessoal.
          </p>
          <p>
            Mas o IPB é muito mais do que apenas uma boa escola de formação: é
            uma instituição que promove a criatividade, a multiculturalidade, a
            vida saudável, que se preocupa com os seus alunos e que tudo faz
            para que aqui obtenham uma formação integral. Sobretudo, o IPB é uma
            comunidade que confia nos seus alunos e que se orgulha deles.
          </p>
          <p>Estamos certos que serão felizes no IPB!</p>
          <p>Bem-vindos!</p>
          <p>
            Orlando Isidoro Afonso Rodrigues
            <p>Presidente do Instituto Politécnico de Bragança</p>
          </p>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default Welcome;
