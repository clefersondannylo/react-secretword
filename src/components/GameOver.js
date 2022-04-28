import './GameOver.css';

const GameOver = ({retry, score, sumScores}) => {
    return(
        <div>
              <h1>Fim de jogo</h1>
              <h2>A sua pontuação foi: <span>{score}</span></h2>
            <button onClick={retry}>Finalizar jogo</button>
        </div>
    )
}
export default GameOver;