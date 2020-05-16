import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";

const Matriculas = () => {
  return (
    <Row>
      <Col xs={12}>
        <h2>Matrículas</h2>
        <p>
          A matrícula dos novos alunos são realizadas ao balcão dos Serviços
          Académicos, no edifício dos Serviços Centrais no Campus do IPB em
          Bragança.
        </p>
        <p>
          O acesso de carro faz-se através da Alameda de Santa Apolónia,
          existindo indicações onde estacionar e o percurso pedonal até aos
          Serviços Académicos. O mapa está disponível para download:
        </p>
        <p>
          <a href="mapa_ipb.pdf" target="_blank" className="get-started-btn">
            Download do mapa
          </a>
        </p>
        <p>
          Consulta, nesta{" "}
          <a
            href="http://portal3.ipb.pt/index.php/sa/informacao-academica/propinas-e-emolumentos"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            página
          </a>
          , na opção Informação académica / Propinas e emolumentos a informação
          sobre o regime de propinas praticado no IPB (regimes, prestações e
          respostas a perguntas frequentes).
        </p>

        <h5>A matrícula dos novos alunos tem os seguintes passos:</h5>
        <ListGroup>
          <ListGroup.Item>1. Boas-vindas do IPB</ListGroup.Item>
          <ListGroup.Item>2. Verificação de dados + inquérito</ListGroup.Item>
          <ListGroup.Item>3. Matrícula</ListGroup.Item>
          <ListGroup.Item>4. Cartão de Estudante</ListGroup.Item>
          <ListGroup.Item>
            5. Serviços de Ação Social – Informação sobre bolsas de estudo 6.
          </ListGroup.Item>
          <ListGroup.Item>6. Caixa Geral de Depósitos</ListGroup.Item>
        </ListGroup>
        <h5>Documentos necessários à matrícula/inscrição dos novos alunos:</h5>
        <ListGroup>
          <ListGroup.Item>- Cartão de Cidadão</ListGroup.Item>
          <ListGroup.Item>
            {" "}
            - Boletim individual de saúde com vacina antitetânica válida
          </ListGroup.Item>
          <ListGroup.Item>
            - Pré-requisitos, quando exigidos para o acesso a ciclos de estudos
            de licenciatura (todas as licenciaturas da Escola Superior de Saúde
            de Bragança - Pré-requisitos do Grupo A )
          </ListGroup.Item>
        </ListGroup>
        <h5>Calendário de Matrículas:</h5>
        <ListGroup>
          <ListGroup.Item>
            1ª Fase do Concurso de Acesso Nacional: 09/09 a 13/09/2019
          </ListGroup.Item>
          <ListGroup.Item>
            1ª Fase de Concursos Locais: 16/09 a 20/09/2019
          </ListGroup.Item>
          <ListGroup.Item>
            2ª Fase do Concurso de Acesso Nacional: 26/09 a 30/09/2019
          </ListGroup.Item>
          <ListGroup.Item>
            3ª Fase do Concurso de Acesso Nacional: 11/10 a 15/10/2019
          </ListGroup.Item>
          <ListGroup.Item>
            2ª Fase de Concursos Locais: 15/10 a 18/10/2019
          </ListGroup.Item>
        </ListGroup>

        <h5>O calendário escolar para o Ano letivo de 2019/2020</h5>
        <Row>
          <Col xs={12} md={4}>
            <ListGroup>
              <ListGroup.Item>
                <p>1º Semestre:</p>
                <p>Início: 16/09/2019</p>
                <p>Fim: 15/02/2020</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} md={4}>
            <ListGroup>
              <ListGroup.Item>
                <p>2º Semestre:</p>
                <p>Início: 17/02/2020</p>
                <p>Fim: 11/07/2020</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} md={4}>
            <ListGroup.Item>
              <p>Pausas letivas:</p>
              <p>Natal: de 23/12/2019 a 05/01/2020</p>
              <p>Páscoa: de 06/04/2020 a 23/04/2020</p>
            </ListGroup.Item>
          </Col>
        </Row>

        <p>
          Calendário académico do IPB completo:{" "}
          <a
            href="http://www.ipb.pt/go/e130"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir calendário
          </a>
        </p>
        <p>
          Podes também consultar o calendário escolar específico do teu curso no
          site da tua escola:
          <ListGroup>
            <ListGroup.Item>
              ESA:{" "}
              <a
                href="http://www.ipb.pt/go/e130"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.ipb.pt/go/e130
              </a>{" "}
              (Só disponível o calendário geral)
            </ListGroup.Item>
            <ListGroup.Item>
              ESTiG:
              <a
                href="http://www.ipb.pt/go/r777"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.ipb.pt/go/r777
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              ESE:{" "}
              <a
                href="http://www.ipb.pt/go/j190"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.ipb.pt/go/j190
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              ESACT:{" "}
              <a
                href="http://www.ipb.pt/go/o816"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.ipb.pt/go/o816
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              ESSa:{" "}
              <a
                href="http://www.ipb.pt/go/s398"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.ipb.pt/go/s398
              </a>
            </ListGroup.Item>
          </ListGroup>
        </p>
        <h5>Outras informações:</h5>
        <h6>Declarações:</h6>
        <p>
          As declarações de matrícula/inscrição poderão ser solicitadas aos
          balcões dos Serviços Académicos após realização da matrícula/inscrição
          e sua validação.
        </p>
        <h6>Estatutos:</h6>
        <p>
          Se pretender beneficiar de algum estatuto (trabalhador-estudante,
          Decreto-Lei n.º 358/70 ou outro) deves entregar, nos Serviços
          Académicos e dentro dos prazos estipulados, a documentação necessária.
        </p>

        <h6>
          Documentação necessária para atribuição do estatuto de
          trabalhador-estudante:
        </h6>
        <ListGroup>
          <ListGroup.Item>- Declaração da entidade patronal;</ListGroup.Item>
          <ListGroup.Item>- Declaração da Segurança Social;</ListGroup.Item>
          <ListGroup.Item>
            - No caso de desemprego involuntário, devem entregar declaração da
            Segurança Social comprovando a sua situação.
          </ListGroup.Item>
        </ListGroup>

        <h6>
          Documentação necessária para isenção de pagamento de propina, ao
          abrigo do Decreto-Lei n.º 358/70:
        </h6>
        <ListGroup>
          <ListGroup.Item>
            - Declaração emitida pelo estabelecimento militar;
          </ListGroup.Item>
          <ListGroup.Item>
            - Requerimento fundamentando estar em condições de reclamar do
            combatente o dever de este prover ao sustento e educação do aluno;
          </ListGroup.Item>
          <ListGroup.Item>
            - Declaração de IRS ou Declaração negativa de IRS.
          </ListGroup.Item>
        </ListGroup>
        <p>
          Nos Serviços Académicos podes tratar de diversos assuntos relacionados
          com candidaturas, matrículas, inscrições, propinas, certificados,
          entre outros assuntos de ordem académica. Para mais informaçãoes podes
          consultar na página dos Serviços Académicos em{" "}
          <a
            href="http://www.ipb.pt/sa"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.ipb.pt/sa
          </a>
          .
        </p>
      </Col>
    </Row>
  );
};

export default Matriculas;
