import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import FontStyle from './fonts/FontStyle';
import MaterialIcons from './icons/MaterialIcons';
import Summary from './components/Summary';
import Stepper from './components/Stepper';

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

const Input = styled.input`
  border: 1px solid #CCC;
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 24px;
  font-size: 16px;
  font-weight: 700;

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

const TextArea = styled(Input)`
  padding: 21px 15px;
  font-family: 'Inter';
  resize: none;
`;

function App() {
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
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                  />

                  <label htmlFor="name">Name</label>
                </InputWrapper>

                <InputWrapper>
                  <Input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                  />
                
                  <label htmlFor="phone">Phone Number</label>
                </InputWrapper>

                <InputWrapper>
                  <TextArea
                    as="textarea"
                    name="address"
                    id="address"
                    rows={4}
                    placeholder="Delivery Address"
                  />

                  <label htmlFor="address">Delivery Address</label>
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
          
          <Summary />
        </StepWrapper>
      </Page>
    </>
  );
}

export default App;
