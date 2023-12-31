import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { NavLink, Route, Routes } from "react-router-dom";


// api
import getWordFromApi from "../services/api";
// styles
import "../styles/App.scss";
import "../styles/Dummy.scss";
import "../styles/Letters.scss";
import "../styles/Form.scss";
import "../styles/Header.scss";
//components
import Header from "./Header";
import Dummy from "./Dummy";
import SolutionLetters from "./SolutionLetters";
import ErrorLetters from "./ErrorLetters";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  const [word, setWord] = useState("");
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState("");

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events


  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };


  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };

  return (
    <div className="page">
   
      <Header />
      <main className="main">
        <section>
          <SolutionLetters userLetters={userLetters} word={word}/>
          <ErrorLetters userLetters={userLetters} word={word}/>
          <Form lastLetter={lastLetter} handleLastLetter={handleLastLetter}/> 
        </section>
        <Dummy numberErrors= {getNumberOfErrors()}/>
      </main>
      <Routes>
         {/*<Route path='/jugar' element={<JugarPage />} />*/}
         <Route path='/instructions' element={<InstructionsPage />} />
         {/*<Route path='/options' element={<OptionsPage />} />*/}
         <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer NavLink={NavLink} 
      />
    </div>
  );
}

export default App;
