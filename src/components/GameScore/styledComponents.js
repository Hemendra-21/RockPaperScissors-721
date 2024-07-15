import styled from 'styled-components'

export const ScoreViewContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border: 3px solid #ffffff;
  border-radius: 10px;
  padding: 15px;
  height: 150px;
  margin-bottom: 80px;
`
export const GameName = styled.h1`
  height: 100px;
  margin-left: 20px;
  padding: 0;
  color: #ffffff;
  font-family: 'Bree serif';
  font-size: 24px;
  line-height: 1.5;
`

export const GameScoreContainer = styled.div`
  background-color: #ffffff;
  width: 130px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-right: 20px;
`

export const ScoreText = styled.p`
  font-family: 'Bree serif';
  color: #223a5f;
  font-size: 25px;
  font-weight: 600;
  margin: 0;
`

export const Score = styled.p`
  font-size: 50px;
  font-family: 'Roboto';
  color: #223a5f;
  font-weight: 600;
  margin: 0;
`
