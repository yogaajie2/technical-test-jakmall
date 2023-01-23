import styled from 'styled-components';
import Formatter from '../helpers/Formatter';
import shipmentOptions from '../mocks/shipmentOptions';
import paymentOptions from '../mocks/paymentOptions';

const Wrapper = styled.section`
  border-left: 1px solid rgba(255, 136, 0, 0.2);
  display: flex;
  flex-direction: column;
  min-height: 500px;
  padding-left: 19px;
  padding-right: 20px;
  padding-top: 30px;
`;

const Heading = styled.span`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
  color: #FF8A00;
`;

const Contents = styled.section`
  margin-top: 10px;
`;

const Delivery = styled.section`
  line-height: 17px;
  color: #000;

  &::before {
    content: '';
    border-bottom: 1px solid #D8D8D8;
    display: block;
    margin: 21px 0;
    width: 80px;
  }

  & .selected {
    margin-top: 4px;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: #1BD97B;
  }
`;

const Payment = styled(Delivery)`
`;

const Costs = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;

  & > div {
    display: flex;
    justify-content: space-between;

    & .amount {
      font-weight: 700;
      color: #000;
    }

    & .provider {
      font-weight: 700;
    }
  }
`;

const Total = styled(Heading)`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

const Proceed = styled.button`
  border: none;
  height: 60px;
  margin-top: 30px;
  padding: 0 40px;
  font-size: 18px;
  background-color: #FF8A00;
  color: #FFF;
  transition: 0.15s background-color ease;

  &:hover {
    background-color: #d87e17;
  }
`;

interface SummaryProps {
  onSubmit: any;
  isDropship: boolean;
  shipment: number | undefined;
  payment: number | undefined;
  currentStep: number;
}

function Summary({
  onSubmit,
  isDropship,
  shipment,
  payment,
  currentStep
}: SummaryProps) {
  const cost = 500000;
  const fee = isDropship ? 5900 : 0;
  const selectedShipment = shipment ? shipmentOptions[shipment] : shipmentOptions[0]
  const selectedPayment = payment ? paymentOptions[payment] : paymentOptions[0]

  return (
    <Wrapper>
      <Heading>Summary</Heading>

      <Contents>  
        <p>10 items purchased</p>
      </Contents>

      {(shipment || shipment === 0) &&
        <Delivery>
          <p>Delivery estimation</p>
          <p className="selected">{selectedShipment.estimate} by {selectedShipment.provider}</p>
        </Delivery>
      }

      {currentStep === 3 &&
        <Payment>
          <p>Payment method</p>
          <p className="selected">{selectedPayment.provider}</p>
        </Payment>
      }

      <Costs>
        <div>
          <p>Cost of goods</p>
          <span className="amount">{Formatter.format(cost)}</span>
        </div>

        {isDropship &&
          <div>
            <p>Dropshipping Fee</p>
            <span className="amount">{Formatter.format(fee)}</span>
          </div>
        }

        {(shipment || shipment === 0) &&
          <div>
            <p>
              <span className="provider">{selectedShipment.provider} </span>
              shipment
            </p>
            <span className="amount">{Formatter.format(selectedShipment.amount)}</span>
          </div>
        }

        <Total as="div">
          <span>Total</span>
          <span>{Formatter.format(cost + fee + (shipment || shipment === 0 ? selectedShipment.amount : 0))}</span>
        </Total>

        {currentStep !== 3 &&
          <Proceed onClick={() => onSubmit()}>{payment || payment === 0 ? `Pay with ${selectedPayment.provider}` : 'Continue to Payment'}</Proceed>
        }
      </Costs>
    </Wrapper>
  );
}

export default Summary;