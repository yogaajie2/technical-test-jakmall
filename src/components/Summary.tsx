import styled from 'styled-components';

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

function Summary({ handleSubmit }: any) {
  return (
    <Wrapper>
      <Heading>Summary</Heading>

      <Contents>
        <p>10 items purchased</p>
      </Contents>

      <Costs>
        <div>
          <p>Cost of goods</p>
          <span className="amount">500,000</span>
        </div>

        <div>
          <p>Dropshipping Fee</p>
          <span className="amount">5,900</span>
        </div>

        <Total as="div">
          <span>Total</span>
          <span>505,900</span>
        </Total>

        <Proceed onClick={handleSubmit((data: object) => console.log(data))}>Continue to Payment</Proceed>
      </Costs>
    </Wrapper>
  );
}

export default Summary;