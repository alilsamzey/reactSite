import Header from './myFirstProject/header';
import Footer from './myFirstProject/Footer';

import Menu from './myFirstProject/menu';
import Main from './myFirstProject/Main';

function App() {
  return (
    <div>
    <Header/>
    <Menu />
    <div className="mainbody">
    
    <Main />
    </div>
    <Footer />
    </div>
  );
}

export default App;
