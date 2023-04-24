import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  :not(:last-of-type) {
    margin-bottom: ${props => {
      return props.theme.spacing(2);
    }};
  }
`;

export const Contact = styled.p`
  display: block;

  color: ${props => {
    return props.theme.colors.text;
  }};
`;

export const ContactName = styled.span`
  font-weight: 500;
`;

export const DeleteButton = styled.button`
  padding: 4px 12px;

  outline: none;
  border: 1px solid transparent;
  border-radius: ${props => {
    return props.theme.spacing(1);
  }};
  background-color: ${props => {
    return props.theme.colors.btn;
  }};

  font-size: 12px;
  font-weight: 500;

  transition-property: background-color, border-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: ${props => {
      return props.theme.colors.btnHover;
    }};
    border-color: ${props => {
      return props.theme.colors.borderHover;
    }};
  }
`;
