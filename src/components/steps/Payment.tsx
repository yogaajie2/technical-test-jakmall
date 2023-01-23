import styled from 'styled-components';
import Heading from '../Heading';

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
        <Heading title="Shipment" />
      </Header>
    </section>
  );
}

export default Payment;