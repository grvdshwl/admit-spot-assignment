import { Icon } from "@mui/material";
import styled from "styled-components";

export const ButtonContainer = styled.div<{
  color: string;
  backgroundColor: string;
  outline: boolean;
}>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) =>
    props.outline ? `1px solid ${props.color}` : `1px solid transparent`};
  width: fit-content;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  padding: 12px 16px;
`;
export const ButtonText = styled.p`
  color: ${(props) => props.color};
  font-size: 14px;
  text-align: center;
  font-weight: 500;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const ButtonIcon = styled(Icon)`
  font-weight: 400;
`;
