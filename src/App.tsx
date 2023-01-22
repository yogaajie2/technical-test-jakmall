import styled from 'styled-components';
import { useForm } from "react-hook-form";
import GlobalStyle from './components/GlobalStyle';
import FontStyle from './fonts/FontStyle';
import MaterialIcons from './icons/MaterialIcons';
import Summary from './components/Summary';
import Stepper from './components/Stepper';

interface Props {
  isInvalid?: boolean;
  validation?: string;
}

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
  font-size: 18px;
`;

const Heading = styled.h1`
  border: none;
  display: inline-block;
  position: relative;
  z-index: 1;
  font-family: 'Montserrat';
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  color: #FF8A00;

  &::after {
    display: block;
    height: 8px;
    position: absolute;
    bottom: 5px;
    width: 300px;
    z-index: -1;
    background-color: #EEEEEE;
    content: '';
  }
`;

const StepWrapper = styled.div`
  display: grid; 
  grid-template-columns: auto 20%;
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-right: 57px;
`;

const ToggleDropship = styled.label`
  font-weight: 500;
  cursor: pointer;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked {
      & ~ .unchecked {
        display: none;
      }

      & ~ .checked {
        display: inline-block;
      }
    }
  }
`;

const CheckBox = styled.span`
  margin-right: 10px;
  vertical-align: middle;
  font-size: 24px;
  color: #1BD97B;

  &.unchecked {
    display: inline-block;
  }

  &.checked {
    display: none;
  }
`;

const Form = styled.form`
  align-items: start;
  display: grid;
  gap: 30px;
  grid-template-columns: auto auto;
  margin-right: 30px;

  & div {
    display: grid;
    gap: 10px;
    grid-auto-flow: row;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  font-size: 16px;

  & > label {
    left: 15px;
    position: absolute;
    top: 6px;
    font-size: 13px;
    transition: 0.15s all ease;
  }
`;

const Input = styled.input<Props>`
  border: 1px solid ${props => props.validation === 'invalid' ? "#FF8A00" : props.validation === 'valid' ? "#1BD97B" : "#CCC"};
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 24px;
  font-size: 16px;
  font-weight: 700;

  & + label {
    color: ${props => props.isInvalid ? "#FF8A00" : "initial"};
  }

  &:focus-visible {
    outline: none;
  }

  &:placeholder-shown {
    & + label {
      top: 24px;
      font-size: 16px;
    }
  }

  &::placeholder {
    visibility: hidden;
    font-weight: 500
  }
`;

const IconInvalid = styled.span`
  position: absolute;
  right: 15px;
  top: 21px;
  color: #FF8A00;
`;

const IconValid = styled(IconInvalid)`
  position: absolute;
  right: 15px;
  top: 21px;
  color: #1BD97B;
`;

const TextArea = styled(Input)`
  padding: 21px 15px;
  font-family: 'Inter';
  resize: none;
`;

function App() {
  interface IFormInput {
    email: string;
    phoneNumber: string;
    address: string;
  }
  
  const {
    formState: { errors },
    handleSubmit,
    register,
    watch
  } = useForm<IFormInput>({ mode: 'onChange' });

  const watchAllFields = watch();
  
  return (
    <>
      <GlobalStyle />
      <FontStyle />
      <MaterialIcons />

      <Page>
        <Stepper />

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
          <section>
            <Header>
              <Heading>Delivery details</Heading>

              <ToggleDropship>
                <input type="checkbox" />
                <CheckBox className="material-icons unchecked">check_box_outline_blank</CheckBox>
                <CheckBox className="material-icons checked">check_box</CheckBox>
                Send as dropshipper
              </ToggleDropship>
            </Header>

            <Form>
              <div>
                <InputWrapper>
                  <Input
                    placeholder="Email"
                    validation={(errors.email && watchAllFields.email) ? 'invalid' : (!errors.email && watchAllFields.email) ? 'valid' : ''}
                    {...register("email", {
                      required: "required",

                      pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Please enter a valid email'
                      }
                    })}
                  />

                  <label htmlFor="email">Email</label>
                  {(errors.email && watchAllFields.email) && <IconInvalid className="material-icons">clear</IconInvalid>}
                  {(!errors.email && watchAllFields.email) && <IconValid className="material-icons">check</IconValid>}
                </InputWrapper>

                <InputWrapper>
                  <Input
                    placeholder="Phone Number"
                    validation={(errors.phoneNumber && watchAllFields.phoneNumber) ? 'invalid' : (!errors.phoneNumber && watchAllFields.phoneNumber) ? 'valid' : ''}
                    {...register("phoneNumber", {
                      required: false,
                      maxLength: 20,
                      minLength: 6,

                      pattern: {
                        value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/g,
                        message: 'Please enter a valid phone number'
                      }
                    })}
                  />
                
                  <label htmlFor="phone">Phone Number</label>
                  {(errors.phoneNumber && watchAllFields.phoneNumber) && <IconInvalid className="material-icons">clear</IconInvalid>}
                  {(!errors.phoneNumber && watchAllFields.phoneNumber) && <IconValid className="material-icons">check</IconValid>}
                </InputWrapper>

                <InputWrapper>
                  <TextArea
                    as="textarea"
                    rows={4}
                    placeholder="Delivery Address"
                    validation={(errors.address && watchAllFields.address) ? 'invalid' : (!errors.address && watchAllFields.address) ? 'valid' : ''}
                    {...register("address", {
                      required: true,
                      maxLength: 120
                    })}
                  />

                  <label htmlFor="address">Delivery Address</label>
                  {(errors.address && watchAllFields.address) && <IconInvalid className="material-icons">clear</IconInvalid>}
                  {(!errors.address && watchAllFields.address) && <IconValid className="material-icons">check</IconValid>}
                </InputWrapper>
              </div>

              <div>
                <InputWrapper>
                  <Input
                    type="text"
                    name="dropshipper name"
                    id="dropshipName"
                    placeholder="Dropshipper name"
                  />

                  <label htmlFor="dropshipName">Dropshipper name</label>
                </InputWrapper>

                <InputWrapper>
                  <Input
                    type="tel"
                    name="dropshipper phone"
                    id="dropshipperPhone"
                    placeholder="Dropshipper phone number"
                  />

                  <label htmlFor="dropshipperPhone">Dropshipper phone number</label>
                </InputWrapper>
              </div>
            </Form>
          </section>
          
          <Summary handleSubmit={handleSubmit} />
        </StepWrapper>
      </Page>
    </>
  );
}

export default App;
