import { styled } from "styled-components";

export const QuantifyInputContainer = styled.div`
  flex: 1;
  background: ${({theme})=>theme.colors["base-button"]};
  gap: 4px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 0.5rem;

  input{
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${({theme})=>theme.colors["base-title"]};

    &:focus{
        outline: none;
    }
  }


`;

export const IconWrapper = styled.button.attrs({
    type: "button",
}) `
  width: 0.875rem;
  height: 0.875rem; 
  border: none;
  background:none;
  color: ${({theme})=>theme.colors["brand-purple"]};
  transition: .4s;

  &:disabled{
    opacity: 0.4;
  }

  &:not(:disabled):hover{
    color: ${({theme})=>theme.colors["brand-purple-dark"]};

  }

`;