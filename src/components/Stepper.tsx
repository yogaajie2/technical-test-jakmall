import styled from 'styled-components';

interface StyleProps {
  active?: boolean;
}

const Wrapper = styled.section`
  border-radius: 35px;
  display: flex;
  gap: 21px;
  left: 39%;
  padding: 20px 38px;
  position: absolute;
  top: -5%;
  font-size: 16px;
  font-weight: 500;
  background-color: #FFFAE6;
  color: #FF8A00;

  & > div {
    align-items: center;
    display: flex;
    gap: 10px;
  }
`;

const Number = styled.div<StyleProps>`
  border-radius: 50%;
  width: 30px;
  line-height: 30px;
  text-align: center;
  background-color: ${props => props.active ? "#FF8A00" : "rgba(255, 136, 0, 0.2)"};
  color: ${props => props.active ? "#FFF" : "#FF8A00"};
  box-shadow: ${props => props.active ? "0px 2px 4px rgba(255, 138, 0, 0.3)" : "none"};
`;

const IconArrow = styled.span`
  margin-left: 22px;
`;

interface StepperProps { currentStep: number }

function Stepper({ currentStep }: StepperProps) {
  return (
    <Wrapper>
      <div>
        <Number active={currentStep === 1}>1</Number>
        Delivery
        <IconArrow className="material-icons">keyboard_arrow_right</IconArrow>
      </div>

      <div>
        <Number active={currentStep === 2}>2</Number>
        Payment
        <IconArrow className="material-icons">keyboard_arrow_right</IconArrow>
      </div>

      <div>
        <Number active={currentStep === 3}>3</Number> Finish
      </div>
    </Wrapper>
  );
}

export default Stepper;