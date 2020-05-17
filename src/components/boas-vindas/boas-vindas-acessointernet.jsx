import React from "react";
import { Row, Col, ListGroup, Container } from "react-bootstrap";

const AcessoInternet = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col xs={12}>
          <h2>Acesso à Internet e Email</h2>
          <h4>Ativar conta do IPB (serviço Myconfig)</h4>
          <p>
            Antes de utilizar qualquer serviço eletrónico do IPB, deves ativar a
            tua conta de email.
          </p>
          <p>
            Para ativar a conta acede ao endereço:{" "}
            <a
              href="http://myconfig.ipb.pt"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://myconfig.ipb.pt
            </a>{" "}
            e clica na ligação da página principal: NOVOS ALUNOS: Active aqui a
            sua senha de acesso.
          </p>
          <p>
            Para proceder à ativação da conta, consulta os dados fornecidos na
            parte inferior da folha que contém o calendário lectivo para o
            corrente ano (Código de Utilizador e Referência), fornecida no acto
            da matrícula.
          </p>
          <p>
            O serviço Myconfig permite também configurar o Correio Electrónico
            (Auto-Resposta e Anti-Spam), Página Pessoal, Alterar Senha de Acesso
            e Partilhar Ficheiros
          </p>
          <h4>Wifi: configuração da rede Eduroam</h4>
          <ListGroup className="my-4">
            <ListGroup.Item>
              <h5>Windows 10</h5>
              <p>1. Escolhe a rede Eduroam</p>
              <p>
                2. Introduz o Username: endereço de Correio Electrónico. (Código
                de Utilizador de acesso ao Webmail, seguido de "@alunos.ipb.pt".
                Exemplo: a1234@alunos.ipb.pt)
              </p>
              <p>
                {" "}
                3. Password: Senha de Acesso à conta de Correio Electrónico
              </p>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="my-4">
            <ListGroup.Item>
              <h5>Android</h5>
              <p>1. Escolhe a rede Eduroam</p>
              <p>2. Método EAP: PEAP</p>
              <p>3. Certificado: Não validar</p>
              <p>
                3. Identidade: endereço de correio electrónico. (Código de
                Utilizador de acesso ao Webmail, seguido de "@alunos.ipb.pt".
                Exemplo: a1234@alunos.ipb.pt)
              </p>
              <p>4. Senha: Senha de acesso à conta de Correio Electrónico</p>
              <p>
                A configuração para outros sistemas operativos pode ser
                consultada na página dos serviços de informática:{" "}
                <a
                  href=">http://www.ipb.pt/si"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.ipb.pt/si
                </a>{" "}
                no menu Rede Wireless
              </p>
            </ListGroup.Item>
          </ListGroup>
          <div className="my-4">
            <h4>Email</h4>
            <p>
              Podes consultar o email através do browser no endereço:{" "}
              <a
                href="https://webmail.alunos.ipb.pt"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://webmail.alunos.ipb.pt
              </a>
            </p>
            <p>
              Também podes configurar um cliente de email para teres um acesso
              permanente ao email. No endereço{" "}
              <a
                href="http://www.ipb.pt/go/i410"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.ipb.pt/go/i410
              </a>{" "}
              podes encontrar manuais de ajuda de configuração do cliente de
              email.
            </p>
            <p>
              É muito importante consultares com frequência o email do IPB,
              devido a serem enviados avisos e informações académicas
              importantes.
            </p>
          </div>
          <div className="my-4">
            <h4>VPN: Acesso aos serviços fora do IPB</h4>
            <p>
              O Serviço de VPN (Virtual Private Network - Rede Privada Virtual)
              do IPB permite o acesso directo aos Serviços disponibilizados na
              Rede do IPB, a partir de uma ligação externa (por exemplo através
              de uma ligação de um ISP ou através de uma rede e-U de outra
              instituição de ensino superior).
            </p>
            <p>
              É necessário ter configurado o acesso por VPN se por exemplo
              pretenderes usar a Bibloteca do Conhecimento Online(
              <a
                href="http://www.b-on.pt"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.b-on.pt)
              </a>{" "}
              fora do campus do IPB para realizares trabalhos de investigação.
            </p>
            <p>
              Instruções de configuração disponivel em:{" "}
              <a
                href="http://www.ipb.pt/go/e511"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.ipb.pt/go/e511
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AcessoInternet;
