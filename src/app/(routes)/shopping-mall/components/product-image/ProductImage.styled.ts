import styled from "styled-components";

export const RelativeContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const AbsoluteContainer = styled.div`
  position: absolute;
  bottom: 0.75rem;
  right: 0.35rem;
`;

type RedFlagProps = {
  severity: "two-weeks" | "one-month";
};

export const RedFlag = styled.div<RedFlagProps>`
  position: absolute;
  background-color: ${({ severity, theme }) =>
    severity === "two-weeks" ? theme.color.error : theme.color.error};
  padding: 0.25rem 1rem;
  top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
