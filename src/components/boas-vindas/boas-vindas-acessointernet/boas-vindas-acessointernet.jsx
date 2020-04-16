import React from "react";

const AcessoInternet = () => {
  return (
    <section id="acessointernet" className="section-bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="wow fadeInRight"
              //style="visibility: hidden; animation-name: none;"
            >
              <p></p>
              <h2>Acesso à Internet e Email</h2>
              <h4>Ativar conta do IPB (serviço Myconfig)</h4>
              <p>
                Antes de utilizar qualquer serviço eletrónico do IPB, deves
                ativar a tua conta de email.
              </p>
              <p>
                {" "}
                Para ativar a conta acede ao endereço:{" "}
                <a href="http://myconfig.ipb.pt" target="_blank">
                  http://myconfig.ipb.pt
                </a>{" "}
                e clica na ligação da página principal: NOVOS ALUNOS: Active
                aqui a sua senha de acesso.
              </p>
              <p>
                Para proceder à ativação da conta, consulta os dados fornecidos
                na parte inferior da folha que contém o calendário lectivo para
                o corrente ano (Código de Utilizador e Referência), fornecida no
                acto da matrícula.{" "}
              </p>
              <p>
                O serviço Myconfig permite também configurar o Correio
                Electrónico (Auto-Resposta e Anti-Spam), Página Pessoal, Alterar
                Senha de Acesso e Partilhar Ficheiros{" "}
              </p>
              <h4>Wifi: configuração da rede Eduroam</h4>
              <h5>Windows 10</h5>
              1. Escolhe a rede Eduroam
              <br />
              2. Introduz o Username: endereço de Correio Electrónico. <br />
              (Código de Utilizador de acesso ao Webmail, seguido de
              "@alunos.ipb.pt". Exemplo: a1234@alunos.ipb.pt)
              <br />
              3. Password: Senha de Acesso à conta de Correio Electrónico
              <p></p>
              <h5>Android</h5>
              1. Escolhe a rede Eduroam
              <br />
              2. Método EAP: PEAP
              <br />
              3. Certificado: Não validar
              <br />
              3. Identidade: endereço de correio electrónico. <br />
              (Código de Utilizador de acesso ao Webmail, seguido de
              "@alunos.ipb.pt". Exemplo: a1234@alunos.ipb.pt)
              <br />
              4. Senha: Senha de acesso à conta de Correio Electrónico
              <p></p>
              <p>
                A configuração para outros sistemas operativos pode ser
                consultada na página dos serviços de informática:{" "}
                <a href=">http://www.ipb.pt/si" target="_blank">
                  http://www.ipb.pt/si
                </a>{" "}
                no menu Rede Wireless
              </p>
              <h4>Email</h4>
              <p>
                Podes consultar o email através do browser no endereço:{" "}
                <a href="https://webmail.alunos.ipb.pt" target="_blank">
                  https://webmail.alunos.ipb.pt
                </a>
              </p>
              <p>
                Também podes configurar um cliente de email para teres um acesso
                permanente ao email. No endereço{" "}
                <a href="http://www.ipb.pt/go/i410" target="_blank">
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
              <h4>VPN: Acesso aos serviços fora do IPB</h4>
              <p>
                O Serviço de VPN (Virtual Private Network - Rede Privada
                Virtual) do IPB permite o acesso directo aos Serviços
                disponibilizados na Rede do IPB, a partir de uma ligação externa
                (por exemplo através de uma ligação de um ISP ou através de uma
                rede e-U de outra instituição de ensino superior).
              </p>
              <p>
                É necessário ter configurado o acesso por VPN se por exemplo
                pretenderes usar a Bibloteca do Conhecimento Online(
                <a href="http://www.b-on.pt" target="_blank">
                  www.b-on.pt)
                </a>{" "}
                fora do campus do IPB para realizares trabalhos de investigação.
              </p>
              <p>
                Instruções de configuração disponivel em:{" "}
                <a href="http://www.ipb.pt/go/e511" target="_blank">
                  http://www.ipb.pt/go/e511
                </a>
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcessoInternet;
