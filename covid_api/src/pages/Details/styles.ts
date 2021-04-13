import styled from 'styled-components';

export const Header = styled.header`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: color 0.6s;
    color: #000000;

    &:hover {
      color: #4d4d4d;
    }

    svg {
      margin-right: 10px;
    }
  }
`;

export const MoreDetails = styled.div`
  margin-top: 110px;
  max-width: 500px;

  background: #f2f2f2;
  width: 100%;
  padding: 20px;
  border-radius: 7px;
  display: block;

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
`;
