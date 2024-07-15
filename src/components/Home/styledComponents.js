import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #223a5f;
  min-height: 100vh;
  padding: 20px;
  width: 100vw;
`
export const GameContent = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const GamePlayContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 400px;
`

export const GameButton = styled.button`
  background-color: transparent;
  border: none;
`

export const ButtonImage = styled.img`
  height: 150px;
`

export const RulesView = styled.div``

export const TriggerButton = styled.button`
  background-color: #ffffff;
  border: none;
  font-family: 'Bree serif';
  color: #223a5f;
  height: 40px;
  width: 100px;
  font-size: 20px;
  border-radius: 5px;
  align-self: flex-end;
`

export const PopupView = styled.div`
  background-color: #ffffff;
  height: 400px;
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  border: none;
  height: 25px;
`

export const PopupImage = styled.img`
  height: 350px;
  width: 450px;
`

export const ResultHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ResultPage = styled.div`
  margin-bottom: 30px;
`
export const ResultText = styled.p`
  font-size: 25px;
  color: #ffffff;
  font-family: 'Roboto';
`
export const ResultPageChoicesContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  border: none;
  height: 40px;
  width: 120px;
  font-family: 'Bree serif';
  font-size: 12px;
  border-radius: 10px;
`
export const ResultAndPlayAgainBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
