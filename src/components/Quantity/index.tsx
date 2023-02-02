import * as React from "react";
import styled from "styled-components";

const QuantityWrapper = styled.div`
  width: 51px;
  height: 15px;
  background-color: #f0eff2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #bebfc2;
  button {
    background: #e7e7ef;
    width: 12px;
    height: 16px;
    border: none;
    align-items: center;
  }
  .data {
    width: 50px;
  }
  div {
    line-height: 15px;
    text-align: center;
    padding-top: 3px;
    align-items: center;
  }
`;
export interface IQuantityProps {
  data: number;
  increaseHandle?: () => void;
  decreaseHandle?: () => void;
}

export default function Quantity(props: IQuantityProps) {
  return (
    <QuantityWrapper>
      <button onClick={props.decreaseHandle}>-</button>
      <div className="data">{props.data}</div>
      <button onClick={props.increaseHandle}>+</button>
    </QuantityWrapper>
  );
}
