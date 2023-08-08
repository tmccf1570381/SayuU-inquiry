import './App.css';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';

function App() {
  return (
    <>
      <Header/>
      <div className="formHead">
        <h2>お問い合わせ</h2>
      </div>
      <Form/>
      <Footer/>
    </>
  );
}

export default App;
