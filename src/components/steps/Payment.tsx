import styled from 'styled-components';
import Heading from '../Heading';
import formatter from '../../helpers/Formatter';
import shipmentOptions from '../../mocks/shipmentOptions';

interface StyleProps {
  selected?: boolean;
}

interface optionProps {
  index: number;
  className?: string;
  provider: string;
  price: number;
  selected?: boolean;
  shipment: number | undefined;
  handleSelectShipment: any;
}

const Option = ({
  index,
  className,
  provider,
  price,
  shipment,
  handleSelectShipment
}: optionProps) => (
  <div
    className={className}
    onClick={() => handleSelectShipment(index)}
  >
    <span className="provider">{provider}</span>
    <span className="price">{formatter.format(price)}</span>
    {shipment === index && <IconValid className="material-icons">check</IconValid>}
  </div>
)

const Select = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledOption = styled(Option)<StyleProps>`
  border: 1px solid ${props => props.shipment === props.index ? "#1BD97B" : "#CCC"};
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 180px;
  padding: 12px 15px;
  position: relative;
  background-color: ${props => props.shipment === props.index ? "rgba(27, 217, 123, 0.1);" : "transparent"};
  color: ${props => props.shipment === props.index ? "rgba(0, 0, 0, 0.8)" : "inherit"};
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

interface PaymentProps {
  shipment: number | undefined;
  setShipment: any;
}

function Payment({
  shipment,
  setShipment
}: PaymentProps) {
  const handleSelectShipment = (index: number) => setShipment(index)

  return (
    <section>
      <Heading title="Shipment" />

      <Select>
        {shipmentOptions.map((
          option: any,
          index: number
        ) => (
          <StyledOption
            key={index}
            index={index}
            provider={option.provider}
            price={option.price}
            shipment={shipment}
            handleSelectShipment={handleSelectShipment}
          />
        ))}
      </Select>
    </section>
  );
}

export default Payment;