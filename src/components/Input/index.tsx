import * as React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const StyledInput = styled.div``;
export interface IInputProps {
  name?: string;
  placeHolder?: string;
  ref?: any;
}

export default function Input(props: IInputProps) {
  const { name, placeHolder, ref } = props;
  return (
    <StyledInput>
      <input type="text" name={name} placeholder={placeHolder} ref={ref} />
    </StyledInput>
  );
}
