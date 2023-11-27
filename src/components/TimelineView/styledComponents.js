/* Write your CSS here */
import styled from 'styled-components'

export const TimelineContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1110px;
  height: 100vh;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`

export const Heading = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #171f46;
  font-family: roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 2.7;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 23px;
  }
`

export const CCBPHeading = styled.span`
  color: #2b237c;
  font-family: roboto;
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`
