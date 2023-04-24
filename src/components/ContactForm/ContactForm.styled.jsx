import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  padding: ${props => {
    return props.theme.spacing(4);
  }};
  width: ${props => {
    return props.theme.spacing(72);
  }};

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: ${props => {
    return props.theme.colors.bgd;
  }};
`;

export const FormField = styled.div`
  :not(:last-of-type) {
    margin-bottom: ${props => {
      return props.theme.spacing(3);
    }};
  }
  :last-of-type {
    margin-bottom: ${props => {
      return props.theme.spacing(6);
    }};
  }
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: ${props => {
    return props.theme.spacing(1);
  }};

  color: ${props => {
    return props.theme.colors.text;
  }};
  font-size: 18px;
  font-weight: 500;
`;

export const Field = styled.input`
  padding: 4px 8px;
  width: ${props => {
    return props.theme.spacing(67.5);
  }};

  outline: none;
  border: 1px solid
    ${props => {
      return props.theme.colors.border;
    }};
  border-radius: ${props => {
    return props.theme.spacing(1);
  }};

  transition-property: border-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    border-color: ${props => {
      return props.theme.colors.borderHover;
    }};
  }
`;

export const FormButton = styled.button`
  margin: 0 auto;
  padding: 4px 12px;

  outline: none;
  border: 1px solid transparent;
  border-radius: ${props => {
    return props.theme.spacing(1);
  }};
  background-color: ${props => {
    return props.theme.colors.btn;
  }};

  font-size: 16px;

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
