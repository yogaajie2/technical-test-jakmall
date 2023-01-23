import styled from 'styled-components';
import Heading from '../Heading';
import formatter from '../../helpers/Formatter';
import shipmentOptions from '../../mocks/shipmentOptions';
import paymentOptions from '../../mocks/paymentOptions';

interface StyleProps {
  selected?: boolean;
}

interface optionProps {
  type: string;
  index: number;
  className?: string;
  provider: string;
  amount: number;
  selected?: boolean;
  shipment?: number | undefined;
  handleSelectShipment?: any;
  payment?: number | undefined;
  handleSelectPayment?: any;
}

const Option = ({
  type,
  index,
  className,
  provider,
  amount,
  shipment,
  handleSelectShipment,
  payment,
  handleSelectPayment
}: optionProps) => (
  <div
    className={className}
    onClick={() => {
      if (type === 'shipment') {
        handleSelectShipment(index)
      } else {
        handleSelectPayment(index)
      }
    }}
  >
    <span className="provider">{provider}</span>
    {amount && <span className="amount">{formatter.format(amount)}</span>}
    {(type === 'shipment' && shipment === index) && <IconValid className="material-icons">check</IconValid>}
    {(type === 'payment' && payment === index) && <IconValid className="material-icons">check</IconValid>}
  </div>
)

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const Select = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledOption = styled(Option)<StyleProps>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 180px;
  padding: ${props => props.amount ? "12px" : "21px"} 15px;
  position: relative;
  cursor: pointer;
  transition: 0.15s all ease;

  &:hover {
    background-color: rgba(27, 217, 123, 0.1);
  }

  &.shipment {
    border: 1px solid ${props => props.shipment === props.index ? "#1BD97B" : "#CCC"};
    background-color: ${props => props.shipment === props.index ? "rgba(27, 217, 123, 0.1);" : "transparent"};
    color: ${props => props.shipment === props.index ? "rgba(0, 0, 0, 0.8)" : "inherit"};
  }

  &.payment {
    border: 1px solid ${props => props.payment === props.index ? "#1BD97B" : "#CCC"};
    background-color: ${props => props.payment === props.index ? "rgba(27, 217, 123, 0.1);" : "transparent"};
    color: ${props => props.payment === props.index ? "rgba(0, 0, 0, 0.8)" : "inherit"};
  }

  & .provider {
    font-size: ${props => props.amount ? "13px" : "16px"};
    font-weight: 500;
    line-height: 16px;
  }

  & .amount {
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
  payment: number | undefined;
  setPayment: any;
}

function Payment({
  shipment,
  setShipment,
  payment,
  setPayment
}: PaymentProps) {
  const handleSelectShipment = (index: number) => setShipment(index)
  const handleSelectPayment = (index: number) => setPayment(index)

  return (
    <Wrapper>
      <section>
        <Heading title="Shipment" />

        <Select>
          {shipmentOptions.map((
            option: any,
            index: number
          ) => (
            <StyledOption
              className="shipment"
              type="shipment"
              key={index}
              index={index}
              provider={option.provider}
              amount={option.amount}
              shipment={shipment}
              handleSelectShipment={handleSelectShipment}
            />
          ))}
        </Select>
      </section>

      <section>
        <Heading title="Payment" />

        <Select>
          {paymentOptions.map((
            option: any,
            index: number
          ) => (
            <StyledOption
              className="payment"
              type="payment"
              key={index}
              index={index}
              provider={option.provider}
              amount={option.amount}
              payment={payment}
              handleSelectPayment={handleSelectPayment}
            />
          ))}
        </Select>
      </section>
    </Wrapper>
  );
}

export default Payment;