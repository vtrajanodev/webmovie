import styled from "styled-components";

export const CartItemContent = styled.tr`
  td {
    div {
      display: flex;
      align-items: center;

      &:nth-child(2) {
        display: block;
        margin-left: 52px;
      }
    }

    input {
      margin: 0 11px;
      width: 62px;
      height: 26px;
      border: 1px solid #999999;
      border-radius: 4px;
      padding: 12px;
    }

    &:last-child {
      text-align: right;
      padding-right: 10px;
    }
  }
`;
