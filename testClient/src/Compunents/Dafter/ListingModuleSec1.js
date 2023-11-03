import React, { useState ,useEffect } from 'react';
import './ListeningModuleSec1.css';
import audioSection1 from './Section1.mp3';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';


const ListeningModuleSec1 = (finalresult) => {

  const [scoreResult, setScoreResult] =useState(0)

  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    question8: '',
    question9: '',
    question10: '',
  });

  const handleChange = (event, question) => {
    const { value } = event.target;
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [question]: value,
    }));
  };
  let score 
  const handleCheckAnswers = () => {
    const correctAnswers = {
      question1: 'swimming pool',
      question2: 'dining room',
      question3: 'garage',
      question4: 'local supermarket',
      question5: 'park',
      question6: 'primary school',
      question7: 'garden',
      question8: '23 April',
      question9: '10.15',
      question10: 'spring street',
     
    };


  
  
   score = 0;
  

    for (const question in answers) {
      if (answers[question] === correctAnswers[question]) {
        score++;
      }
    }
    
    finalresult = score
    setScoreResult(score)
    alert(`You got ${score} out of 10 questions correct.`);
  };

  return (
    <div className='listening-test-container'>
      <h1 className="test-title">IELTS Listening: Section 1</h1>
      <audio controls className="audio-player">
        <source src={audioSection1} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="questions-container">
        <p>1. Name: Mary Collins <br></br> Faculty available: <input type="text" value={answers.question1} onChange={e => handleChange(e, 'question1')} /></p>
        <p>2. General Layout: upstairs: living room <br></br> Bedrooms <br></br> Downstairs: <input type="text" value={answers.question2} onChange={e => handleChange(e, 'question2')} /> </p>
        <p>3. Car Park: availblity of a large <input type="text" value={answers.question3} onChange={e => handleChange(e, 'question3')} /> </p>
        <p>4. Shopping: at the <input type="text" value={answers.question4} onChange={e => handleChange(e, 'question4')} /></p>
        <p>5. Place for the children playing: <input type="text" value={answers.question5} onChange={e => handleChange(e, 'question5')} /></p>
        <p>6. Education resources: a <input type="text" value={answers.question6} onChange={e => handleChange(e, 'question6')} /> in the community</p>
        <p>7. Rent: $980 a month <br></br> (including the maintanance fees of the <input type="text" value={answers.question7} onChange={e => handleChange(e, 'question7')} />) </p>
        <p>8. Date of house availble: <input type="text" value={answers.question8} onChange={e => handleChange(e, 'question8')} /></p>
        <p>9. Viewing arrangement (time): meet at <input type="text" value={answers.question9} onChange={e => handleChange(e, 'question9')} /></p>
        <p>10. Postcode: GA58ER <br></br> Address: <input type="text" value={answers.question10} onChange={e => handleChange(e, 'question10')} /> </p>
      </div>
      <button className="check-button" onClick={handleCheckAnswers}>Check Answers</button>
      {/* <Link to= {"/ListeningModuleSec2"} className="next_button">Move to next section</Link> */}
      <Link to={`/list2/:${scoreResult}`} className="next_button">Move to next section</Link> 
    </div>
  );

};

export default ListeningModuleSec1;
