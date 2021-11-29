import styled from 'styled-components';

export const Container = styled.div`
  height: 215px;
  width: 215px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;
`;

export const CardContainer = styled.div`
  height: 200px;
  width: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid ${props => props.theme.colors[props.color]};
  border-radius: 16px;
  transition: transform .2s;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const Header = styled.div`
  height: 5%;
  width: 100%;
  padding: 15px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  font-size: 15px;
  color: ${props => props.theme.colors[props.color]};
`;

export const Body = styled.div`
  height: 87%;
  width: 100%;
  padding: 0 0 5px 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
  }
`;

export const Footer = styled.div`
  height: 8%;
  width: 100%;
  padding: 25px 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.colors.white};
  font-size: 25px;
  background-color: ${props => props.theme.colors[props.color]};
  border-radius: 0 0 16px 16px;
`;
