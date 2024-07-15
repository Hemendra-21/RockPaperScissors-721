import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  GameContainer,
  GameContent,
  GamePlayContainer,
  GameButton,
  ButtonImage,
  RulesView,
  TriggerButton,
  PopupView,
  CloseButton,
  PopupImage,
  ResultPage,
  ResultContainer,
  ResultHeading,
  ResultText,
  ResultPageChoicesContainer,
  PlayAgainButton,
  ResultAndPlayAgainBtnContainer,
} from './styledComponents'

import GameScore from '../GameScore/index'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {isGameActive: true, userChoice: '', randomChoice: '', score: 0}

  evaluateGame = () => {
    const {userChoice, randomChoice} = this.state

    if (userChoice === 'ROCK' && randomChoice === 'PAPER') {
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (userChoice === 'ROCK' && randomChoice === 'SCISSORS') {
      this.setState(prevState => ({score: prevState.score + 1}))
    }

    if (userChoice === 'PAPER' && randomChoice === 'ROCK') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (userChoice === 'PAPER' && randomChoice === 'SCISSORS') {
      this.setState(prevState => ({score: prevState.score - 1}))
    }

    if (userChoice === 'SCISSORS' && randomChoice === 'ROCK') {
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (userChoice === 'SCISSORS' && randomChoice === 'PAPER') {
      this.setState(prevState => ({score: prevState.score + 1}))
    }
  }

  getGamePlay = () => (
    <GamePlayContainer>
      <GameButton
        type="button"
        data-testid="rockButton"
        onClick={() => {
          this.setState(
            {
              userChoice: choicesList[0].id,
              isGameActive: false,
              randomChoice:
                choicesList[Math.floor(Math.random() * choicesList.length)].id,
            },
            this.evaluateGame,
          )
        }}
      >
        <ButtonImage src={choicesList[0].imageUrl} alt={choicesList[0].id} />
      </GameButton>

      <GameButton
        type="button"
        data-testid="scissorsButton"
        onClick={() => {
          this.setState(
            {
              userChoice: choicesList[1].id,
              isGameActive: false,
              randomChoice:
                choicesList[Math.floor(Math.random() * choicesList.length)].id,
            },
            this.evaluateGame,
          )
        }}
      >
        <ButtonImage src={choicesList[1].imageUrl} alt={choicesList[1].id} />
      </GameButton>

      <GameButton
        type="button"
        data-testid="paperButton"
        onClick={() => {
          this.setState(
            {
              userChoice: choicesList[2].id,
              isGameActive: false,
              randomChoice:
                choicesList[Math.floor(Math.random() * choicesList.length)].id,
            },
            this.evaluateGame,
          )
        }}
      >
        <ButtonImage src={choicesList[2].imageUrl} alt={choicesList[2].id} />
      </GameButton>
    </GamePlayContainer>
  )

  getResultText = () => {
    const {userChoice, randomChoice} = this.state
    if (userChoice === 'ROCK') {
      switch (randomChoice) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (userChoice === 'PAPER') {
      switch (randomChoice) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (randomChoice) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  getResult = () => {
    const {userChoice, randomChoice} = this.state
    const userChoiceItem = choicesList.filter(
      eachItem => eachItem.id === userChoice,
    )

    const randomChoiceItem = choicesList.filter(
      eachItem => eachItem.id === randomChoice,
    )

    return (
      <ResultPage>
        <ResultPageChoicesContainer>
          <ResultContainer>
            <ResultHeading>YOU</ResultHeading>
            <GameButton type="button">
              <ButtonImage src={userChoiceItem[0].imageUrl} alt="your choice" />
            </GameButton>
          </ResultContainer>
          <ResultContainer>
            <ResultHeading>OPPONENT</ResultHeading>
            <GameButton type="button">
              <ButtonImage
                src={randomChoiceItem[0].imageUrl}
                alt="opponent choice"
              />
            </GameButton>
          </ResultContainer>
        </ResultPageChoicesContainer>

        <ResultAndPlayAgainBtnContainer>
          <ResultText>{this.getResultText()}</ResultText>
          <PlayAgainButton onClick={() => this.setState({isGameActive: true})}>
            PLAY AGAIN
          </PlayAgainButton>
        </ResultAndPlayAgainBtnContainer>
      </ResultPage>
    )
  }

  getRules = () => (
    <Popup modal trigger={<TriggerButton type="button">Rules</TriggerButton>}>
      {close => (
        <PopupView>
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine />
          </CloseButton>
          <PopupImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </PopupView>
      )}
    </Popup>
  )

  render() {
    const {isGameActive, score} = this.state
    return (
      <GameContainer>
        <GameContent>
          <GameScore score={score} />
          {isGameActive ? this.getGamePlay() : this.getResult()}
          <RulesView>{this.getRules()}</RulesView>
        </GameContent>
      </GameContainer>
    )
  }
}

export default Home
