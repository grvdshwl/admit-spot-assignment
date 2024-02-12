import styled from "styled-components";
export const TrackerContainer = styled.div`
  margin-bottom: 120px;
`;
export const TrackerNavContainer = styled.div`
  background: #0e185f;
  padding: 16px 84px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
  @media screen and (max-width: 600px) {
    padding: 12px 16px;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    padding: 20px 40px;
  }
`;
