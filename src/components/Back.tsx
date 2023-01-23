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

interface HeadingProps {
  currentStep: number;
  setCurrentStep: any;
}

function Back({
  currentStep,
  setCurrentStep
}: HeadingProps) {
  return (
    <BackButton onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)}>
      <IconBack
        as="span"
        className="material-icons"
      >
        arrow_back
      </IconBack>

      Back to {currentStep === 1 ? 'cart' : 'delivery'}
    </BackButton>
  );
}

export default Back;