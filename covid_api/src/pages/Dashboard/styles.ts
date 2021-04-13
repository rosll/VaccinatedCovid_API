import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h2`
  font-size: 36px;
  color: #000000;
  line-height: 40px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 800px;
  display: flex;

  input {
    flex: 1;
    height: 40px;
    padding: 0 20px;
    border: 0;
    border-radius: 7px 0 0 7px;
    color: #595959;
    background: #f2f2f2;
    border: 3px solid #f2f2f2;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #ff1a1a;
      `}

    &::placeholder {
      color: #999999;
    }
  }

  button {
    width: 210px;
    background: #595959;
    border-radius: 0px 7px 7px 0px;
    color: #ffffff;
    border: 0;
    font-weight: bold;
    transition: background-color 0.4s;

    &:hover {
      background: ${shade(0.6, '#595959')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #ff1a1a;
  margin-top: 8px;
`;

export const Countries = styled.div`
  margin-top: 60px;
  max-width: 500px;

  a {
    background: #f2f2f2;
    width: 100%;
    padding: 20px;
    border-radius: 7px;
    display: block;
    text-decoration: none;
    transition: transform 0.6s;
    /* display: flex;
    align-items: center; */

    &:hover {
      transform: translateY(15px);
    }

    & + a {
      margin-top: 19px;
    }

    div {
      strong {
        font-size: 23px;
        color: #000000;
      }

      p {
        font-size: 16px;
        margin-top: 6px;
        color: #4d4d4d;
      }
    }

    svg {
      margin-top: 6px;
      margin-left: 50%;
      color: #000000;

      &:hover {
        color: #4d4d4d;
      }
    }
  }
`;
