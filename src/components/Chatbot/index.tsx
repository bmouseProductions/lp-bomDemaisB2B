import { useState, useEffect, useRef } from "react";
import {
  /*  IconButton, */
  SpeedDial,
  SpeedDialHandler,
} from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/outline";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/images/logoFrente.webp";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

// Defina os tipos para Pergunta e HistoricoItem
type Pergunta = {
  pergunta: string;
  opcoes: Opcao[];
};

type Opcao = {
  texto: string;
  baseDePerguntas?: Pergunta[]; // Agora pode conter uma lista de perguntas
  proximaPergunta?: number; // Ou apenas o índice da próxima pergunta
  linkExterno?: string; // Adicione um campo para link externo, se aplicável
};

type HistoricoItem = {
  pergunta: string;
  resposta: string;
};
//base de perguntas

const chat: Pergunta[] = [
  {
    pergunta: "Olá, selecione a opção abaixo para falar conosco:",
    opcoes: [
      {
        texto: "WhatsApp",
        linkExterno:
          "https://web.whatsapp.com/send?phone=5511930289845&text=Ol%C3%A1%2C%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es%20sobre%20o%20Programa%20de%20Benef%C3%ADcios%20e%20Descontos%20bomd%2B.%20Consegue%20me%20ajudar%3F",
      },
      // Outras opções aqui, se necessário...
    ],
  },
  // Outras perguntas e opções aqui...
];

export const Chatbot = () => {
  //botoes
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isCardVisible, setIsCardVisible] = useState(false);

  //verificacao
  const [resultado, setResultado] = useState("");
  const [numeroAleatorio, setNumeroAleatorio] = useState(getRandomInt(1, 5));
  const [numeroAleatorio2, setNumeroAleatorio2] = useState(getRandomInt(1, 5));
  const [resposta, setResposta] = useState("");
  const [isRespostaCorreta, setIsRespostaCorreta] = useState(false);
  const [radioMarcado, setRadioMarcado] = useState(false);

  const [mensagem, setMensagem] = useState("");
  const [perguntaAtual, setPerguntaAtual] = useState<Pergunta | null>(null);
  const [historicoPerguntas, setHistoricoPerguntas] = useState<HistoricoItem[]>(
    []
  );
  /* const [progressoCompleto, setProgressoCompleto] = useState(false); */

  const [historico, setHistorico] = useState<
    { pergunta: Pergunta; opcao: Opcao }[]
  >([]);

  const [mostrarMensagemVoltar, setMostrarMensagemVoltar] = useState(false);
  const [, setMostrarBotaoVoltar] = useState(false);

  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Inicialize o chat com a primeira pergunta
    setPerguntaAtual(chat[0]);
  }, []);

  const handleOptionSelect = (opcao: Opcao) => {
    const { texto, linkExterno, baseDePerguntas } = opcao;

    // Adicione a pergunta atual e a resposta selecionada ao histórico
    setHistoricoPerguntas([
      ...historicoPerguntas,
      {
        pergunta: perguntaAtual!.pergunta,
        resposta: texto,
      },
    ]);

    // Se houver linkExterno, redirecione para ele
    if (linkExterno) {
      window.open(linkExterno, "_blank");
    } else if (baseDePerguntas) {
      // Se houver baseDePerguntas, avance para a próxima pergunta
      const proximaPergunta = baseDePerguntas[0];

      if (!proximaPergunta) {
        // Verifique se não há mais perguntas na base
        setPerguntaAtual(chat[0]);
        setMensagem("");
        /*   setProgressoCompleto(true); */ // Todas as perguntas foram respondidas
      } else {
        // Salve a pergunta atual e opção no histórico
        setHistorico([...historico, { pergunta: perguntaAtual!, opcao }]);
        setPerguntaAtual(proximaPergunta);
        setMostrarBotaoVoltar(true); // Mostrar o botão de voltar
        setMensagem(""); // Limpe a mensagem
      }
    }
  };

  const handleVoltar = () => {
    // Verifique se há perguntas no histórico para voltar
    if (historico.length > 0) {
      const { pergunta } = historico.pop()!;
      setPerguntaAtual(pergunta);
      setHistorico([...historico]);
      setMostrarMensagemVoltar(true);

      // Role o chat para o final ao mostrar a mensagem de volta
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollIntoView({ behavior: "smooth" });
      }

      // Limpe a mensagem de volta após um período de tempo
      setTimeout(() => {
        setMensagem("");
        setMostrarMensagemVoltar(false);
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  };

  useEffect(() => {
    // Role o chat para o final sempre que uma nova mensagem for adicionada
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [historicoPerguntas]);

  const opcoes =
    perguntaAtual &&
    perguntaAtual.opcoes.map((opcao, index) => (
      <button
        key={index}
        onClick={() => handleOptionSelect(opcao)}
        className="bg-[#036735] h-[60px] lg:h-[80px] flex items-center justify-center p-3 lg:p-5 rounded-xl text-white text-sm lg:text-lg shadow-2xl"
      >
        {opcao.texto}
      </button>
    ));

  /* dssds */

  // Mensagem a ser exibida quando todas as perguntas forem respondidas
  /* const mensagemFinal =
    progressoCompleto && historico.length === 0 ? (
      <div className="bg-gray-300 p-2 rounded-md mt-2">
        O problema foi resolvido? (Sim / Não)
      </div>
    ) : null; */

  //gera numeros aleatorios
  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min); // Arredonda para cima para incluir o valor mínimo
    max = Math.floor(max); // Arredonda para baixo para excluir o valor máximo
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // abrir o chat
  const handleButtonClick = () => {
    setIsButtonVisible(false);
    setIsCardVisible(true);
  };

  // fechar o chat
  const handleButtonClose = () => {
    setIsButtonVisible(true);
    setIsCardVisible(false);
    setIsRespostaCorreta(false);
    setNumeroAleatorio(getRandomInt(1, 5));
    setNumeroAleatorio2(getRandomInt(1, 5));
    setResposta("");
    setResultado("");
    /*  setHistoricoPerguntas([]); */
  };

  const handleRadioChange = () => {
    setRadioMarcado(!radioMarcado); // Inverte o valor do estado
  };

  //verificar se o usuario nao e bot
  const verification = () => {
    if (radioMarcado) {
      if (parseInt(resultado) === numeroAleatorio + numeroAleatorio2) {
        setResposta(`Resposta correta!`);
        setNumeroAleatorio(getRandomInt(1, 5));
        setNumeroAleatorio2(getRandomInt(1, 5));
        setIsRespostaCorreta(true);
        setResultado("");
      } else {
        setResposta("Resposta incorreta. Tente novamente.");
        setTimeout(() => {
          setResposta("");
        }, 1000);
        setNumeroAleatorio(getRandomInt(1, 5));
        setNumeroAleatorio2(getRandomInt(1, 5));
        setIsRespostaCorreta(false);
        setResultado("");
      }
    } else {
      // O rádio não está marcado, você pode fazer algo aqui, como mostrar uma mensagem de erro.
      alert("Você deve aceitar os termos para continuar.");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResultado(event.target.value);
  };

  if (isRespostaCorreta) {
    return (
      /*   <div className="absolute bottom-3 right-3  w-[80%] h-[500px]  lg:w-[500px] lg:h-[650px] rounded-xl flex flex-col shadow-2xl border-2 "> */
      <div className="fixed bottom-3 right-3 bg-[#e3e2e2]  w-[80%] h-[500px] lg:h-[650px] sm:w-[60%] md:w-[50%] lg:w-[45%] xl:w-[35%]  2xl:w-[30%] rounded-xl flex flex-col shadow-2xl border-2 ">
        <header className="bg-[#0062ff]  p-5 flex justify-between rounded-t-xl sticky top-0  shadow-2xl ">
          <img src={Logo} alt="BMOUSE SAÚDE" className="w-[150px]" />
          <button onClick={handleButtonClose}>
            {" "}
            <PlusIcon className="h-7 w-7 text-red-600  transition-transform rotate-45" />
          </button>
        </header>

        <div className=" p-5 flex flex-col bg-[#e3e2e2]  h-[500px] lg:h-[650px] overflow-x-auto justify-items-center  gap-5">
          <div className="historico">
            {historicoPerguntas.map((item, index) => (
              <div
                key={index}
                className="historico-item flex flex-col overflow-x-hidden gap-5"
              >
                <p className="text-base lg:text-xl !text-[#616161] bg-white p-3 lg:p-5 rounded-t-2xl rounded-be-none rounded-br-2xl mt-5 ">
                  {item.pergunta}
                </p>
                <p className="text-base lg:text-lg bg-[#036735] p-3 lg:p-5 rounded-t-2xl rounded-s-2xl !text-[#ffffff]  self-end ">
                  {item.resposta}
                </p>
              </div>
            ))}
          </div>
          {/* <h1 className="text-base lg:text-xl bg-white p-5 rounded-t-2xl rounded-be-none rounded-br-2xl">
            {perguntaAtual?.pergunta}
          </h1> */}
          <h1 className="text-base lg:text-xl bg-white !text-[#616161] p-3 lg:p-5 rounded-t-2xl rounded-be-none rounded-br-2xl shadow-2xl ">
            {perguntaAtual?.pergunta}
          </h1>
          {mensagem && <p>{mensagem}</p>}
          <div className="grid grid-cols-2 gap-5 text-base !text-[#ffffff] lg:text-xl w-full">
            {opcoes}
          </div>
          {mostrarMensagemVoltar && (
            <div className="bg-green-200 p-2 rounded-lg">{mensagem}</div>
          )}
          {/* Exiba a mensagem final, se aplicável */}
          <div ref={chatContainerRef} />
        </div>

        <footer className="text-center text-sm lg:text-base bg-[#0062ff] text-white h-[80px] w-full p-5 rounded-b-xl">
          {historico.length > 0 && (
            <button
              onClick={handleVoltar}
              className="bg-[#036735] text-sm lg:text-base  p-2 lg:px-3 lg:py-3 rounded-md text-white  flex gap-2 justify-between items-center ">
              <FontAwesomeIcon icon={faChevronLeft} className="text-sm " />
              Voltar ao menu anterior
            </button>
          )}
        </footer>
        {/*  <footer className="bg-[#ac3939] h-[80px] px-5 py-3 flex justify-start sticky bottom-0 rounded-b-xl  shadow-2xl">
          {historico.length > 0 && (
            <Button
              color="green"
              size="lg"
              onClick={handleVoltar}
              className="text-sm lg:text-base  p-2 lg:px-3 lg:py-2 rounded-md text-white  flex gap-2 justify-between items-center "
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
              Voltar ao menu anterior
            </Button>
          )}
        </footer> */}
      </div>
    );
  }

  return (
    <>
      {isButtonVisible && (
        /*         <div className="absolute bottom-3 right-3  rounded-full border-2 w-[65px] h-[65px] flex items-center justify-center bg-white"> */
        <div className="fixed bottom-3 right-3 cursor-pointer ">
          <SpeedDial>
            <SpeedDialHandler onClick={handleButtonClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-14 fill-green-600">
              <path className="" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
              {/* <IconButton
                color="white"
                size="lg"
                className="rounded-full border border-blue-gray-50 shadow-xl"
              >
                <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </IconButton> */}
            </SpeedDialHandler>
          </SpeedDial>
        </div>
      )}

      {isCardVisible && (
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="fixed bottom-3 right-3 bg-[#e3e2e2] w-[80%] h-[500px] md:h-[650px] sm:w-[60%] md:w-[50%] lg:w-[45%] xl:w-[35%]  2xl:w-[30%] rounded-xl flex flex-col shadow-2xl border-2 "
        >
          <header className="bg-[#0062ff] h-[80px] p-5 flex justify-between rounded-t-xl sticky top-0  shadow-xl">
            <img src={Logo} alt="BMOUSE SAÚDE" className="w-[150px]" />
            <button onClick={handleButtonClose}>
              {" "}
              <PlusIcon className="h-7 w-7 text-white  transition-transform rotate-45" />
            </button>
          </header>
          <div className="h-[500px] lg:h-[650px] bg-[#e3e2e2] p-5 text-center flex flex-col justify-between overflow-x-auto">
            <h1 className="text-base lg:text-xl text-[#616161]">
              Por razões de segurança, por favor responda a questão abaixo para
              continuar o processo
            </h1>
            <p className="text-base lg:text-xl text-[#616161]">
              Qual o resultado de {numeroAleatorio} + {numeroAleatorio2} ?
            </p>
            {/* <Input label="Input Error"  error /> */}
            <div className="w-full flex flex-col items-start">
              <label className="text-[#616161]" htmlFor="number">Digite o resultado</label>
              <input
                type="number"
                value={resultado}
                onChange={handleInputChange}
                className="w-full h-[40px] p-2 rounded shadow-2xl text-[#616161]"
              />
            </div>

            <div className="flex flex-col items-start">
                <div className="w-full flex justify-start">
                  <input
                    name="terms"
                    required
                    type="radio"
                    checked={radioMarcado}
                    onChange={handleRadioChange}
                    className="!w-5 !h-5"
                  />
                  <label htmlFor="radio" className=" w-fit flex justify-start text-center">
                    Para melhor lhe atender precisaremos guardar temporariamente as
                    informações aqui fornecidas.
                  </label>
                </div>
                <a
                  href="https://www.cartaobomdemais.com.br/politica-de-privacidade/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto font-bold text-xs md:text-base text-blue-800"
                >
                  Leia a nossa política de privacidade
                </a>
            </div>

            <button
              className="bg-[#036735] shadow-2xl p-2 lg:px-3 lg:py-3 w-full rounded-xl hover:opacity-90 text-white"
              onClick={verification}
            >
              Verificar
            </button>

            <div>
              <p
                className={
                  isRespostaCorreta ? "text-green-900" : "text-red-700 pb-5"
                }
              >
                {resposta}
              </p>
            </div>
          </div>
          <footer className="text-center text-sm lg:text-base bg-[#0062ff] text-white h-[80px] w-full p-5 rounded-b-xl">
            <p>
              Desenvolvido por{" "}
              <a
                href="https://www.bmouseproductions.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bmouse Productions
              </a>
            </p>
          </footer>
          {/*       <footer className="bg-[#a83737] h-[60px]  p-3 flex justify-between sticky bottom-0 rounded-b-xl  shadow-2xl">
            {historico.length > 0 && (
              <button
                onClick={handleVoltar}
                className="bg-[#006131] text-sm lg:text-base p-2 lg:px-3 lg:py-2 rounded-md text-white items-end"
              >
                Voltar ao menu anterior
              </button>
            )}
          </footer> */}
        </div>
      )}
    </>
  );
};

/* 
text-center p-5 flex flex-col bg-[#e0e0e0] opacity-90 h-[500px] lg:h-[650px] overflow-x-auto justify-items-center gap-5 */
