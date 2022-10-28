import styled from 'styled-components'
import { systemColors } from 'styles/colors'


export const Container = styled.div`
  width: 83%;
  margin: 32px auto;
  &.navbar-container {
    width: 92%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    background-color: ${systemColors.mainWhite};
    @media (max-width: 576px) {
      width: 100%;
    }
  }
`