/* Write your CSS here */
import styled from 'styled-components'

export const CourseTitleAndDurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`
export const CourseTitle = styled.h1`
  color: #171f46;
  font-size: 17px;
  font-family: roboto;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`
export const DurationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Duration = styled.p`
  color: #171f46;
  font-size: 12px;
  font-family: roboto;
  font-weight: 600;
  line-height: 1.2;
  margin-left: 4px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`

export const CourseDescription = styled.p`
  color: #1e293b;
  font-size: 12px;
  font-family: roboto;
  line-height: 1.5;
  margin-top: 0px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const CourseTagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;
  margin: 0;
`

export const CourseTagItem = styled.li`
  list-style-type: none;
`

export const CourseTag = styled.p`
  color: #25262c;
  background-color: #e2e8fc;
  font-size: 10px;
  font-family: roboto;
  font-weight: 500;
  border-radius: 4px;
  padding: 4px 8px;
  margin-bottom: 8px;
  margin-right: 12px;
  line-height: 1.5;
  margin: 3px;
  @media (min-width: 768px) {
    font-size: 12px;
    font-weight: 600;
  }
`
