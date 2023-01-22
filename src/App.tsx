import styled from 'styled-components';
import FontStyle from './fonts/FontStyle';
import './App.css';

const Page = styled.main`
  border-radius: 4px;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 55px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 20px;
  padding-top: 30px;
  background-color: #FFF;
  box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
`;

const Back = styled.button`
  border: none;
  font-weight: 500;
  background-color: transparent;
  opacity: 0.6;
`;

const StepWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 25%;
`;

function App() {
  return (
    <>
      <FontStyle />

      <Page>
        <Back>Back to cart</Back>

        <StepWrapper>
          <h1>Delivery details</h1>
        </StepWrapper>
      </Page>
    </>
  );
}

export default App;
