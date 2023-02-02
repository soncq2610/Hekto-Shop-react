import * as React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #ff1788;
  border-radius: 3px;
  color: white;
  border: none;
`;

export interface IButtonProps {
  backgroundColor?: string;
  children?: React.ReactNode;
  borderRadius?: string;
  position?: any;
  onClick?: () => void;
  type?: any;
  disabled?: boolean;
  className?: string;
  active?: any;
  style?: any;
  onKeyPress?: any;
}

export default function Button(props: IButtonProps) {
  const { children, onClick, type, disabled, className, style, onKeyPress } =
    props;
  return (
    <div>
      <StyledButton
        onClick={onClick}
        onKeyPress={onKeyPress}
        type={type}
        disabled={disabled}
        className={className}
        style={style}
      >
        {children}
      </StyledButton>
    </div>
  );
}
