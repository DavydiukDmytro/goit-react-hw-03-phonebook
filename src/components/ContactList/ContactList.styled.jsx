import styled from '@emotion/styled';

export const Item = styled.li`
  &:not(:last-child) {
    padding-bottom: 10px;
  }
`;

export const Contacts = styled.p`
  display: inline-block;
  font-weight: 500;
  font-size: 22px;
  margin-right: 10px;
`;

export const Btn = styled.button`
  padding: 3px 15px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 20px;
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
