import styled from "styled-components";

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: rotate-spinner 1s linear;
  animation-iteration-count: infinite;


@keyframes rotate-spinner {
  100% {
    transform: rotate(360deg);
  }
}
`;
