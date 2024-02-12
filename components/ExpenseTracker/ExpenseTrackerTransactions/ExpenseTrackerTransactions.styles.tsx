import { Paper } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
interface ImageProps {
  src: any;
  alt: string;
}
export const ExpenseTrackerTransactionContainer = styled(Paper)`
  padding: 20px;
  margin-top: 20px;
`;

export const ExpenseTrackerIllustration = styled(Image)<ImageProps>`
  width: 200px;
  height: 200px;
  object-fit: cover;
  @media screen and (max-width: 600px) {
    width: 150px;
    height: 150px;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    width: 200px;
    height: 200px;
  }
`;
