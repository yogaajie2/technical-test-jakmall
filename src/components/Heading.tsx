import styled from 'styled-components';

const Title = styled.h1`
  border: none;
  display: inline-block;
  position: relative;
  z-index: 1;
  font-family: 'Montserrat';
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  color: #FF8A00;

  &::after {
    display: block;
    height: 8px;
    position: absolute;
    bottom: 5px;
    width: 300px;
    z-index: -1;
    background-color: #EEEEEE;
    content: '';
  }
`;

interface HeadingProps { title: string }

function Heading({ title }: HeadingProps) {
  return (
    <Title>{title}</Title>
  );
}

export default Heading;