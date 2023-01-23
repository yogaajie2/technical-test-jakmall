import { useState } from 'react';
import styled from 'styled-components';
import Heading from '../Heading';
import Formatter from '../../helpers/Formatter';

interface StyleProps {
  selected?: boolean;
}

interface optionProps {
  className?: string;
  provider: string;
  price: number;
  selected?: boolean;
  shipment: string;
  handleSelectShipment: any;
}

const Option = ({
  className,
  provider,
  price,
  shipment,
  handleSelectShipment
}: optionProps) => (
  <div
    className={className}
    onClick={() => handleSelectShipment(provider)}
  >
    <span className="provider">{provider}</span>
    <span className="price">{Formatter.format(price)}</span>
    {shipment === provider && <IconValid className="material-icons">check</IconValid>}
  </div>
)

const Select = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledOption = styled(Option)<StyleProps>`
  border: 1px solid ${props => props.shipment === props.provider ? "#1BD97B" : "#CCC"};
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 180px;
  padding: 12px 15px;
  position: relative;
  background-color: ${props => props.shipment === props.provider ? "rgba(27, 217, 123, 0.1);" : "transparent"};
  color: ${props => props.shipment === props.provider ? "rgba(0, 0, 0, 0.8)" : "inherit"};
  cursor: pointer;
  transition: 0.15s all ease;

  &:hover {
    background-color: rgba(27, 217, 123, 0.1);
  }

  & .provider {
    font-size: 13px;
    font-weight: 500;
    line-height: 16px;
  }

  & .price {
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
  }
`;

const IconValid = styled.span`
  position: absolute;
  right: 15px;
  top: 21px;
  color: #1BD97B;
`;

function Payment() {
  const [shipment, setShipment] = useState('GO-SEND');
  const handleSelectShipment = (provider: string) => setShipment(provider)

  return (
    <section>
      <Heading title="Shipment" />

      <Select>
        <StyledOption
          provider="GO-SEND"
          price={15000}
          shipment={shipment}
          handleSelectShipment={handleSelectShipment}
        />

        <StyledOption
          provider="JNE"
          price={9000}
          shipment={shipment}
          handleSelectShipment={handleSelectShipment}
        />

        <StyledOption
          provider="Personal Courier"
          price={29000}
          shipment={shipment}
          handleSelectShipment={handleSelectShipment}
        />
      </Select>
    </section>
  );
}

export default Payment;