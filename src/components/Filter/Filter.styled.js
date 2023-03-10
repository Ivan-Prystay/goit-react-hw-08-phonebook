import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  padding: 10px 0;
`;

export const FilterInput = styled.input`
  width: fit-content;
  background: rgba(255, 255, 255, 0.5);

  &:hover,
  :focus {
    background: rgba(0, 0, 0, 0.5);
    color: white;
  }
`;
