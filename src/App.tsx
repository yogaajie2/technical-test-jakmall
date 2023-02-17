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
import Back from './components/Back';
import Delivery from './components/steps/Delivery';
import Payment from './components/steps/Payment';
import Finish from './components/steps/Finish';

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
  const [shipment, setShipment] = useState<number | undefined>();
  const [payment, setPayment] = useState<number | undefined>();

  const methods = useForm<IFormInput>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log('Delivery details: ', data)

    if (currentStep === 1) {
      setCurrentStep(2)
      setShipment(0)
      setPayment(0)
    } else {
      setCurrentStep(3)
    }
  };

  const handleReset = () => {
    methods.reset()
    setIsDropship(false)
    setShipment(undefined)
    setPayment(undefined)
  }

  return (
    <>
      <GlobalStyle />
      <FontStyle />
      <MaterialIcons />

      <Page>
        <Stepper currentStep={currentStep} />

        {currentStep < 3 &&
          <Back
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        }

        <StepWrapper>
          <FormProvider {...methods}>
            {currentStep === 1 &&
              <Delivery
                isDropship={isDropship}
                setIsDropship={setIsDropship}
              />
            }

            {currentStep === 2 &&
              <Payment
                shipment={shipment}
                setShipment={setShipment}
                payment={payment}
                setPayment={setPayment}
              />
            }

            {currentStep === 3 &&
              <Finish
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                shipment={shipment}
                handleReset={handleReset}
              />
            }
            
            <Summary
              onSubmit={methods.handleSubmit(onSubmit)}
              isDropship={isDropship}
              shipment={shipment}
              payment={payment}
              currentStep={currentStep}
            />
          </FormProvider>
        </StepWrapper>
      </Page>
    </>
  );
}

/* COMMIT CHECK */
/* YEESSS */
/* AFTER REBASE */
/* AFTER REBASE 2 */
/* AFTER REBASE AND MERGE */
/* AFTER SECOND REBASE */

export default App;
