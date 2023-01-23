import styled from 'styled-components';
import Heading from '../Heading';
import Back from '../Back';
import shipmentOptions from '../../mocks/shipmentOptions';

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;

  & > div {
    display: flex;
    flex-direction: column;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 9px;

      &.back {
        margin-top: 60px;

        & > button {
          text-align: left;
        }
      }
      
      & .order-id {
        color: #000;
      }
    }
  }
`;

interface FinishProps {
  currentStep: number;
  setCurrentStep: any;
  shipment: number | undefined;
  handleReset: any
}

function Finish({
  currentStep,
  setCurrentStep,
  shipment,
  handleReset
}: FinishProps) {
  const selectedShipment = shipment ? shipmentOptions[shipment] : shipmentOptions[0]

  const randomString = (
    length: number,
    chars: string
  ) => {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  }
  
  return (
    <Wrapper>
      <div>
        <Heading title="Thank You" />

        <div>
          <p className="order-id">Order ID : {randomString(5, '23456789ABCDEFGHJKLMNPQRSTUVWXYZ')}</p>
          <p>Your order will be delivered within {selectedShipment.estimate} with {selectedShipment.provider}</p>
        </div>

        <div className="back">
          <Back
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            handleReset={handleReset}
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default Finish;