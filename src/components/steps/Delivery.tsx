import { useFormContext } from "react-hook-form";
import styled from 'styled-components';

interface StyleProps {
  isInvalid?: boolean;
  validation?: string;
}

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

const Input = styled.input<StyleProps>`
  border: 1px solid ${props => props.validation === 'invalid' ? "#FF8A00" : props.validation === 'valid' ? "#1BD97B" : "#CCC"};
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 42px;
  padding-top: 24px;
  font-size: 16px;
  font-weight: 700;

  & + label {
    color: ${props => props.isInvalid ? "#FF8A00" : "initial"};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;

    & + label {
      opacity: 0.3;
      cursor: not-allowed;
    }
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
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 42px;
  padding-top: 24px;
  font-family: 'Inter';
  resize: none;

  & ~ .material-icons {
    top: 50px;
  }
`;

const Counter = styled.span`
  position: absolute;
  right: 15px;
  top: 10px;
  font-size: 13px;
`;

interface DeliveryProps {
  isDropship: boolean;
  setIsDropship: any;
}

function Delivery({
  isDropship,
  setIsDropship
}: DeliveryProps) {

  const {
    formState: { errors },
    register,
    resetField,
    watch
  } = useFormContext();

  const watchAllFields = watch();

  return (
    <section>
      <Header>
        <Heading>Delivery details</Heading>

        <ToggleDropship>
          <input
            type="checkbox"
            checked={isDropship}
            onChange={() => {
              setIsDropship(!isDropship)
              resetField('dropshipName')
              resetField('dropshipPhoneNumber')
            }}
          />
          
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
              validation={(errors.email) ? 'invalid' : (!errors.email && watchAllFields.email) ? 'valid' : ''}
              {...register("email", {
                required: "required",

                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter a valid email'
                }
              })}
            />

            <label htmlFor="email">Email</label>
            {(errors.email) && <IconInvalid className="material-icons">clear</IconInvalid>}
            {(!errors.email && watchAllFields.email) && <IconValid className="material-icons">check</IconValid>}
          </InputWrapper>

          <InputWrapper>
            <Input
              placeholder="Phone Number"
              validation={(errors.phoneNumber) ? 'invalid' : (!errors.phoneNumber && watchAllFields.phoneNumber) ? 'valid' : ''}
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
            {(errors.phoneNumber) && <IconInvalid className="material-icons">clear</IconInvalid>}
            {(!errors.phoneNumber && watchAllFields.phoneNumber) && <IconValid className="material-icons">check</IconValid>}
          </InputWrapper>

          <InputWrapper>
            <TextArea
              as="textarea"
              rows={4}
              placeholder="Delivery Address"
              validation={(errors.address) ? 'invalid' : (!errors.address && watchAllFields.address) ? 'valid' : ''}
              {...register("address", {
                required: true,
                maxLength: 120
              })}
            />

            <label htmlFor="address">Delivery Address</label>
            {(errors.address) && <IconInvalid className="material-icons">clear</IconInvalid>}
            {(!errors.address && watchAllFields.address) && <IconValid className="material-icons">check</IconValid>}
            <Counter>{watchAllFields.address ? 120 - watchAllFields.address.length : 120}</Counter>
          </InputWrapper>
        </div>

        <div>
          <InputWrapper>
            <Input
              placeholder="Dropshipper name"
              disabled={!isDropship}
              validation={(errors.dropshipName) ? 'invalid' : (!errors.dropshipName && watchAllFields.dropshipName) ? 'valid' : ''}
              {...register("dropshipName", { required: isDropship ? true : false })}
            />

            <label htmlFor="dropshipName">Dropshipper name</label>
            {(errors.dropshipName) && <IconInvalid className="material-icons">clear</IconInvalid>}
            {(!errors.dropshipName && watchAllFields.dropshipName) && <IconValid className="material-icons">check</IconValid>}
          </InputWrapper>

          <InputWrapper>
            <Input
              placeholder="Dropshipper phone number"
              disabled={!isDropship}
              validation={(errors.dropshipPhoneNumber) ? 'invalid' : (!errors.dropshipPhoneNumber && watchAllFields.dropshipPhoneNumber) ? 'valid' : ''}
              {...register("dropshipPhoneNumber", {
                required: isDropship ? true : false,
                maxLength: 20,
                minLength: 6,

                pattern: {
                  value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/g,
                  message: 'Please enter a valid phone number'
                }
              })}
            />

            <label htmlFor="dropshipperPhone">Dropshipper phone number</label>
            {(errors.dropshipPhoneNumber) && <IconInvalid className="material-icons">clear</IconInvalid>}
            {(!errors.dropshipPhoneNumber && watchAllFields.dropshipPhoneNumber) && <IconValid className="material-icons">check</IconValid>}
          </InputWrapper>
        </div>
      </Form>
    </section>
  );
}

export default Delivery;