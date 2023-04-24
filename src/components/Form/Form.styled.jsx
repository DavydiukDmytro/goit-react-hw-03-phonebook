import styled from '@emotion/styled';

export const ContainerForm = styled.form`
  padding: 15px;
  border: 2px solid var(--color-secondary-bg);
  border-radius: 10px;
  display: inline-block;
`;

export const Label = styled.label`
  display: block;
  font-weight: 700;
  font-size: 24px;
  &.margin-top30 {
    margin-top: 30px;
  }
`;

export const Input = styled.input`
  display: block;
  border-radius: 10px;
  padding: 4px 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 24px;
  color: var(--color-primary-bg);
  &.margin-bottom0 {
    margin-bottom: 0;
  }
`;

export const Btn = styled.button`
  padding: 5px 15px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 24px;
  background-color: var(--color-white);
  color: var(--color-primary-bg);
  cursor: pointer;
  border: 1px solid var(--color-secondary-bg);
  &:hover,
  &:focus {
    color: var(--color-white);
    background-color: var(--color-primary-bg);
  }
`;
