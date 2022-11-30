import { EmptyStateCart } from './index';
import styled from "styled-components";

export const EmptyStateCartContainer = styled.div`
  max-width: 960px;
  height: 532px;
  margin: 24px auto 24px;
  padding: 64px;

  background-color: #FFF;
`

export const EmptyStateCartContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;

/* border: 1px solid red; */
  h1 {
    font-size: 20px;
    color: black;
    font-weight: 700;
    margin-bottom: 32px;
  }

  img {
    display: block;
    margin-bottom: 32px;
  }

`