import styled from 'styled-components';

const Heading = styled.h1`
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

const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-right: 57px;
`;

function Payment() {
  return (
    <section>
      <Header>
        <Heading>Shipment</Heading>
      </Header>
    </section>
  );
}

export default Payment;