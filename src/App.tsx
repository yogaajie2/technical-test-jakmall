import { useState } from 'react';

import {
  useForm,
  SubmitHandler,
  FormProvider
} from "react-hook-form";

import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import FontStyle from './fonts/FontStyle';
import MaterialIcons from './icons/MaterialIcons';
import Summary from './components/Summary';
import Stepper from './components/Stepper';
import Delivery from './components/steps/Delivery';

const Page = styled.main`
  border-radius: 4px;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 55px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 20px;
  padding-top: 30px;
  position: relative;
  background-color: #FFF;
  box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
`;

const Back = styled.button`
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
  font-size: 18px;
`;

const StepWrapper = styled.div`
  display: grid; 
  grid-template-columns: auto 20%;
`;

function App() {
  interface IFormInput {
    email: string;
    phoneNumber: string;
    address: string;
    dropshipName: string;
    dropshipPhoneNumber: string;
  }

  const [isDropship, setIsDropship] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const methods = useForm<IFormInput>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log('Delivery details: ', data)
    setCurrentStep(2)
  };

  return (
    <>
      <GlobalStyle />
      <FontStyle />
      <MaterialIcons />

      <Page>
        <Stepper currentStep={currentStep} />

        <Back>
          <IconBack
            as="span"
            className="material-icons"
          >
            arrow_back
          </IconBack>

          Back to cart
        </Back>

        <StepWrapper>
          <FormProvider {...methods}>
            {currentStep === 1 &&
              <Delivery
                isDropship={isDropship}
                setIsDropship={setIsDropship}
              />
            }
            
            <Summary
              onSubmit={methods.handleSubmit(onSubmit)}
              isDropship={isDropship}
            />
          </FormProvider>
        </StepWrapper>
      </Page>
    </>
  );
}

export default App;
