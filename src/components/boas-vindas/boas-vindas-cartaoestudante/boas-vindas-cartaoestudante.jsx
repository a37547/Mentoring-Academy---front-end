import React from "react";

const CartaoEstudante = () => {
  return (
    <section id="cartaoestudante">
      <div className="features-row">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="wow fadeInRight"
                //style="visibility: hidden; animation-name: none;"
              >
                <p></p>
                <h2>Cartão de Estudante do IPB</h2>
                <p></p>
                <p></p>
                <p>
                  Durante o processo de matrícula será emitido o Cartão de
                  Estudante do IPB, sendo tirada uma fotografia e impresso o
                  cartão na hora.
                </p>
                <p>
                  Este cartão é pessoal e intransmissível e está dotado de
                  tecnologia sem fios RFID.
                </p>
                As principais funcionalidades do cartão são:
                <ul>
                  <li>
                    Presenças eletrónicas (marcação de presença nas aulas por
                    RFID)
                  </li>
                  - Passa o cartão no leitor na entrada da sala
                  <br />
                  - Tens 10 minutos após o professor para passar o cartão e 15
                  minutos se for no primeiro tempo (8H30/9H00 ou 14H00/14H30)
                  <br />
                  <br />
                  <li>
                    Senhas da Cantina (Confirmação da compra de senha na
                    cantina)
                  </li>
                  - Passa o cartão no leitor RFID na caixa para confirmares que
                  tens senha adquirida
                  <br />
                  <br />
                  <li>Biblioteca (Requisição de livros na Biblioteca)</li>
                  <br />
                  <li>
                    Digitalização, cópia e impressão (Utilização das
                    fotocopiadoras do IPB que estão disponíveis em todas as
                    escolas)
                  </li>
                  <p></p>
                  <p>
                    Para usar os serviços pagos associados ao cartão, cantina e
                    cópias/impressão, é necessário carregar saldo nos serviços
                    Online:{" "}
                    <a href="www.online.ipb.pt" target="_blank">
                      www.online.ipb.pt
                    </a>
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartaoEstudante;
