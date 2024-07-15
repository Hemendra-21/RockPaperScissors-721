import {
  ScoreViewContainer,
  GameName,
  GameScoreContainer,
  ScoreText,
  Score,
} from './styledComponents'

const GameScore = props => {
  const {score} = props

  return (
    <ScoreViewContainer>
      <GameName>
        ROCK <br /> PAPER <br /> SCISSORS
      </GameName>
      <GameScoreContainer>
        <ScoreText>Score</ScoreText>
        <Score>{score}</Score>
      </GameScoreContainer>
    </ScoreViewContainer>
  )
}

export default GameScore
