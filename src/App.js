import style from './style.module.css';
import { Header } from './components/Header/Header';
import { Main } from './pages/Main/Main';
import { Footer } from './components/Footer/Footer';

function App() {

  return (
    <div className={style.container}>
      <div className={style.screen_view}>
        <Header />
        <Main />  
        <Footer />
      </div>
    </div>
   
  );
}

export default App;