import './App.css';
import DescriptionCard from './Components/DescriptionCard/DescriptionCard';
import { ReactComponent as GoShop } from './assets/goshop.svg';
import LogoCard from './Components/LogoCard/LogoCard';

function App() {
  return (
    <div className="App">
      <DescriptionCard GoShop={GoShop} title={'lOREIPSUM'} description1={`Please enter your login information to`}
                        description2={'sign in to your account'}/>
      <LogoCard/>
    </div>
  );
}

export default App;
