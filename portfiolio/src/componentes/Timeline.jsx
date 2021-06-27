import React, { Component } from 'react';
import '../css/Timeline.scss';

class Timeline extends Component {
  render() {
    return (
      <div id="timeline">
        <h1>Linha do tempo</h1>
        <p className="leader">Essa linha do tempo conta um pouco sobre minha vida.</p>
        <div className="demo-card-wrapper">
          <div className="demo-card demo-card--step1">
            <div className="head">
              <div className="number-box">
                <span>2010</span>
              </div>
              <h2>PONTO DE PARTIDA</h2>
            </div>
            <div className="body">
              <p>
                Me formei no colégio e não tinha muita idéia do que fazer, como eu tinha
                uma banda e gostava de tocar baixo, por um tempo pensei que poderia virar
                musico.
              </p>
              <p>
                Comecei a fazer aulas de baixo no IB&T com o grande mestre Nilton Wood.
              </p>
            </div>
          </div>
          <div className="demo-card demo-card--step2">
            <div className="head">
              <div className="number-box">
                <span>2011</span>
              </div>
              <h2>MUDANÇA DE ROTA</h2>
            </div>
            <div className="body">
              <p>
                Com o tempo passando, sem nenhum sinal de sucesso a vista como musico, e a
                pressão familiar aumentando para que eu tivesse um curso superior, acabei
                cedendo e iniciei o curso de Direito na FMU.
              </p>
              <p>
                Nessa época eu ainda estava perdido e não sabia direito o que eu queria
                fazer na vida.
              </p>
            </div>
          </div>
          <div className="demo-card demo-card--step3">
            <div className="head">
              <div className="number-box">
                <span>2013</span>
              </div>
              <h2>
                <div style={{ lineHeight: '25px' }}>DE VOLTA AOS ESTUDOS</div>
              </h2>
            </div>
            <div className="body">
              <p>
                Eu estava extremamente infeliz na faculdade de direito então resolvi
                trancar a matricula, imediatamente fui gentilmente informado que eu não
                ficaria sem fazer nada e fui informado que eu deveria estudar para entrar
                na faculdade de medicina.
              </p>
            </div>
          </div>
          <div className="demo-card demo-card--step4">
            <div className="head">
              <div className="number-box">
                <span>2015</span>
              </div>
              <h2>A CENTELHA</h2>
            </div>
            <div className="body">
              <p>
                Como já haviam passado dois anos e eu estava longe de conseguir passar no
                vestibular de medicina, cansado de fazer provas de vestibular voltei para
                a faculdade de direito no primeiro semestre de 2016.
              </p>
              <p>
                Mas como eu realmente era muito infeliz, no segundo semestre eu pedi
                transferência para o curso de Analise e Desenvolvimento de Sistemas na
                própria FMU.
              </p>
            </div>
          </div>
          <div className="demo-card demo-card--step5">
            <div className="head">
              <div className="number-box">
                <span>2016</span>
              </div>
              <h2 style={{lineHeight: "25px"}}>PROBLEMAS FINANCEIROS</h2>
            </div>
            <div className="body">
              <p>
                Eu não estava muito satisfeito com a qualidade de ensino da FMU então
                mudei para a FIAP, cursei durante o ano de 2016 inteiro e realmente fui
                muito feliz nessa época.
              </p>
              <p>
                Porem no final do ano eu estava com muitas parcelas em aberto e não
                consegui seguir para o segundo ano de Analise e Desenvolvimento De
                Sistemas.
              </p>
            </div>
          </div>
          <div className="demo-card demo-card--step6">
            <div className="head">
              <div className="number-box">
                <span>2018</span>
              </div>
              <h2>DESMOTIVADO</h2>
            </div>
            <div className="body">
              <p>
                Em 2018 a situação financeira melhorou um pouco, mas no final de agosto
                acabei tendo o mesmo problema financeiro, e nesta época eu também estava
                procurando emprego como programador e só recebia não.
              </p>
              <p>
                No final de agosto acabei trancando novamente a faculdade por estar
                extremamente desmotivado e sem condições financeiras de pagar o curso.
              </p>
            </div>
          </div>
          <div className="demo-card demo-card--step7">
            <div className="head">
              <div className="number-box">
                <span>2018</span>
              </div>
              <h2>
                <span className="small">2018-2020</span>
                DEPRESSÃO
              </h2>
            </div>
            <div className="body">
              <p>
                A situação financeira apenas piorava (o apartamento que eu morava já
                estava indo a leilão), eu não recebia nenhuma resposta das vagas em que me
                aplicava.
              </p>
              <p>
                Desesperado também por não conseguir encontrar um norte nos milhares de
                vídeos no youtube que ensinam a programar, eu estava perdido.
              </p>
            </div>
          </div>
          <div className="demo-card demo-card--step7">
            <div className="head">
              <div className="number-box">
                <span>2020</span>
              </div>
              <h2>
                <span className="small">Junho</span>
                <div style={{lineHeight: "25px"}}>LUZ NO FIM DO TUNEL</div>
              </h2>
            </div>
            <div className="body">
              <p>
                Mergulhado em dividas e na depressão, um belo dia a ex-namorada do meu
                irmão comentou que ela estava pensando em começar um curso de programação
                que você só pagaria se conseguisse um emprego de R$3.500.
              </p>
              <p>
                E me disse que só precisava estudar alguns vídeos e se aplicar a vaga. Sem
                muita esperança de conseguir entrar, fiz todas as etapas.
              </p>
            </div>
          </div>
          <div className="demo-card demo-card--step7">
            <div className="head">
              <div className="number-box">
                <span>2020</span>
              </div>
              <h2>
                <span className="small">Julho</span>
                MUDANÇA DE VIDA
              </h2>
            </div>
            <div className="body">
              <p>
                Passei no processo seletivo para participar da Trybe na turma 7, ainda um
                pouco incrédulo, e sem certeza do dia de amanhã embarquei com tudo nessa
                nova etapa.
              </p>
            </div>
          </div>
          <div className="demo-card demo-card--step7">
            <div className="head">
              <div className="number-box">
                <span>2020</span>
              </div>
              <h2>
                <span className="small">Dezembro</span>
                MUDANÇAS
              </h2>
            </div>
            <div className="body" style={{height: '300px'}}>
              <p>
                Após alguns meses comecei a acertar as coisas, consegui vender o
                apartamento em que morava e com isso zerei todas as minhas dividas, mudei
                de São Paulo para Presidente Venceslau.
              </p>
              <p>
                No curso eu estava extremamente motivado, fazendo vários projetos e
                aprendendo muito, não só cresci muito em habilidades técnicas como hoje
                sou uma nova pessoa.
              </p>
              <p>
                Devo muito a Jade Vieira que com alguns desafios simples que ela fez
                realmente mudaram a maneira que eu enxergo o mundo.
              </p>
            </div>
          </div>
          <div className="demo-card demo-card--step7">
            <div className="head">
              <div className="number-box">
                <span>2021</span>
              </div>
              <h2>FELIZ</h2>
            </div>
            <div className="body">
              <p>
                A Trybe realmente conseguiu mudar minha vida e hoje sou muito mais feliz,
                tenho um norte e sei onde quero chegar.
              </p>
              <p>
                Os planos para 2021 são: Formar na Trybe, concluir o curso de iOS da
                Udacity e conseguir um emprego.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Timeline;
