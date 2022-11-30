import styled from "styled-components";

export const HeaderStyled = styled.header`
  max-width: 960px;
  margin: 24px auto;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 1.25rem;
  }

  p {
    font-weight: 600;
    font-size: 0.875rem;
  }

  
  div {
    display: flex;
    flex-direction: column;
    
    p {
      font-size: 14px;
    }

    a {
    text-decoration: none;
    color: #FFF;
  }

    span {
      color: #999999;
      align-self: flex-end;
      font-size: 12px;
    }
  }
`;
