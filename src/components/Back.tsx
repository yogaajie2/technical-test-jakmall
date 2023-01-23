import styled from 'styled-components';

const BackButton = styled.button`
  border: none;
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 500;
  background-color: transparent;
  opacity: 0.6;
  transition: 0.15s opacity ease;

  &:hover {
    opacity: 1;
  }
`;

const IconBack = styled(Back)`
  margin-right: 10px;
  vertical-align: bottom;
  font-family: 'Material Icons';
  font-size: 18px !important;
`;

interface BackProps {
  currentStep: number;
  setCurrentStep: any;
  handleReset?: any;
}

function Back({
  currentStep,
  setCurrentStep,
  handleReset
}: BackProps) {
  return (
    <BackButton onClick={() => {
      if (currentStep > 1 && currentStep < 3) {
        setCurrentStep(currentStep - 1)
      } else if (currentStep === 3) {
        handleReset()
        setCurrentStep(1)
      }
    }}>
      <IconBack
        as="span"
        className="material-icons"
      >
        arrow_back
      </IconBack>

      {currentStep < 3 && `Back to ${currentStep === 1 ? 'cart' : 'delivery'}`}
      {currentStep === 3 && 'Go to Homepage'}
    </BackButton>
  );
}

export default Back;