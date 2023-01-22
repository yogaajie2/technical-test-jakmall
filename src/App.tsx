import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import FontStyle from './fonts/FontStyle';
import MaterialIcons from './icons/MaterialIcons';
import Summary from './components/Summary';
import Stepper from './components/Stepper';
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
      <GlobalStyle />
      <FontStyle />
      <MaterialIcons />

      <Page>
        <Stepper />

        <StepWrapper>
          
          <Summary />
        </StepWrapper>
      </Page>
    </>
  );
}

export default App;
