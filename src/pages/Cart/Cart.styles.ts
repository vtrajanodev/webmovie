import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 960px;
  height: 286px;
  background-color: #fff;
  border-radius: 4px;
  
  margin: 24px auto;

  table {
    color: black;
    width: 100%;
    font-weight: 700;
    text-align: left;
    border-spacing: 24px 21px;

    button {
      width: 18px;
      height: 18px;
      background-color: transparent;
      border: none;
    }

    th {
      color: #999999;
      font-size: 14px;

      &:last-child {
        min-width: 100px;
      }
    }

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
  }

  hr {
  max-width: 910px;
  margin: 0 auto;
  color: #999999;
}
`
