import Header from './myFirstProject/header';
import Footer from './myFirstProject/Footer';
import Aside from './myFirstProject/Aside';
import Menu from './myFirstProject/menu';
import Main from './myFirstProject/Main';

function App() {
  return (
    <div>
    <Header/>
    <Menu />
    <div className="mainbody">
    <Aside />
    <Main />
    </div>
    
    <Footer />
    </div>
  );
}

export default App;
