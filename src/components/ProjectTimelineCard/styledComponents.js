/* Write your CSS here */
import styled from 'styled-components'

export const ProjectCardContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 7px;
  margin-bottom: 7px;
`
export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
`
export const ProjectTitleAndDuration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`
export const ProjectTitle = styled.h1`
  color: #171f46;
  font-family: roboto;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`
export const DurationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
`
export const Duration = styled.p`
  color: #171f46;
  font-family: roboto;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  margin-left: 4px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`
export const ProjectDescription = styled.p`
  color: #1e293b;
  font-family: roboto;
  font-size: 12px;
  line-height: 1.5;
  margin-top: 0;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`
export const VisitLink = styled.a`
  text-align: center;
  color: #0967d2;
  font-family: roboto;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  text-decoration: none;
  margin-top: 5px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`
