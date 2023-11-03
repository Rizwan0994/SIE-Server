import React, { useState } from 'react';
import './ListeningModuleSec1.css';
import audioSection2 from './Section2.mp3';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const ListeningModuleSec2 = (finalresult) => {
  const { result } = useParams();
    const [answers, setAnswers] = useState({
      question11: '',
      question12: '',
      question13: '',
      question14: '',
      question15: '',
      question16: '',
      question17: '',
      question18: '',
      question19: '',
      question20: '',
    });
  console.log("result  "+result)
    const handleChange = (event, question) => {
      const { value } = event.target;
      setAnswers(prevAnswers => ({
        ...prevAnswers,
        [question]: value,
      }));
    };
  
    const handleCheckAnswers = () => {
        const correctAnswers = {
          question11: 'B',
          question12: 'C',
          question13: 'C',
          question14: 'A',
          question15: 'B',
          question16: 'G',
          question17: 'B',
          question18: 'A',
          question19: 'F',
          question20: 'D',
         
        };
      
        let score = 0;

      
    
        for (const question in answers) {
          if (answers[question] === correctAnswers[question]) {
            score++;
          }
        }
        
        finalresult += score
        alert(`You got ${score} out of 10 questions correct.`);
        alert(`You got ${finalresult} as final`);
      };
    
  
    return (
        <div className='listening-test-container'>
        <h1 className="test-title">IELTS Listening: Section 2</h1>
        <audio controls className="audio-player">
          <source src={audioSection2} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div className="questions-container">
        <p>11. What is the new improvement about the zoo this time?</p>
        <label>
          <input
            type="radio"
            name="question11"
            value="A"
            checked={answers.question11 === 'A'}
            onChange={e => handleChange(e, 'question11')}
          />
          a. Zoo has built a new dog walking area
        </label>
        <label>
          <input
            type="radio"
            name="question11"
            value="B"
            checked={answers.question11 === 'B'}
            onChange={e => handleChange(e, 'question11')}
          />
          b. Zoo has brought a new batch of animals
        </label>
        <label>
          <input
            type="radio"
            name="question11"
            value="C"
            checked={answers.question11 === 'C'}
            onChange={e => handleChange(e, 'question11')}
          />
          c. Zoo has expanded its exhibition area
        </label>

 
        <p>12. What is the change for the new regulation enacted in June?</p>
        <label>
          <input
            type="radio"
            name="question12"
            value="A"
            checked={answers.question12 === 'A'}
            onChange={e => handleChange(e, 'question12')}
          />
          A. The zoo is not open during the weekdays.
        </label>
        <label>
          <input
            type="radio"
            name="question12"
            value="B"
            checked={answers.question12 === 'B'}
            onChange={e => handleChange(e, 'question12')}
          />
          B. Visitors are allowed to feed the animals at night
        </label>
        <label>
          <input
            type="radio"
            name="question12"
            value="C"
            checked={answers.question12 === 'C'}
            onChange={e => handleChange(e, 'question12')}
          />
          C. Visitors are allowed to see the animals until the late night.
        </label>
        <p>13. While visiting the kangaroo, which behavior is forbidden?</p>
        <label>
          <input
            type="radio"
            name="question13"
            value="A"
            checked={answers.question13 === 'A'}
            onChange={e => handleChange(e, 'question13')}
          />
          A. Shouting
        </label>
        <label>
          <input
            type="radio"
            name="question13"
            value="B"
            checked={answers.question13 === 'B'}
            onChange={e => handleChange(e, 'question13')}
          />
          B. Shouting
        </label>
        <label>
          <input
            type="radio"
            name="question13"
            value="C"
            checked={answers.question13 === 'C'}
            onChange={e => handleChange(e, 'question13')}
          />
          C. Feeding
        </label>
      
        <p>14. Why is the pye-dog zone temporarily closed?</p>
        <label>
          <input
            type="radio"
            name="question14"
            value="A"
            checked={answers.question14 === 'A'}
            onChange={e => handleChange(e, 'question14')}
          />
          A. Because the fence is broken.
        </label>
        <label>
          <input
            type="radio"
            name="question14"
            value="B"
            checked={answers.question14 === 'B'}
            onChange={e => handleChange(e, 'question14')}
          />
          B. Because the pye-dogs are in hibernation
        </label>
        <label>
          <input
            type="radio"
            name="question14"
            value="C"
            checked={answers.question14 === 'C'}
            onChange={e => handleChange(e, 'question14')}
          />
          C. Because the pye-dog zone is under construction.
        </label>
      
        <p>15. Where can the visitors buy the discounted ticket?</p>
        <label>
          <input
            type="radio"
            name="question15"
            value="A"
            checked={answers.question15 === 'A'}
            onChange={e => handleChange(e, 'question15')}
          />
          A. Photo shop
        </label>
        <label>
          <input
            type="radio"
            name="question15"
            value="B"
            checked={answers.question15 === 'B'}
            onChange={e => handleChange(e, 'question15')}
          />
          B. Photo shop
        </label>
        <label>
          <input
            type="radio"
            name="question15"
            value="C"
            checked={answers.question15 === 'C'}
            onChange={e => handleChange(e, 'question15')}
          />
          C. Reception desk
        </label>
      </div>
  
           <div className='images_sec3'>
      {/* <img src={graphImage} alt="Graph" className="graph-image" />
      <img src={graphImage2} alt="Graph" className="graph-image2" /> */}
     </div> 

     <div className='questions-container'>
        <p>16. Bird hide 
      <input
        type="text"
        value={answers.question16}
        onChange={e => handleChange(e, 'question16')}
      />
      </p>
      <p>17. Pye-dog zone  
      <input
        type="text"
        value={answers.question17}
        onChange={e => handleChange(e, 'question17')}
      />
      </p>
      <p>18. Rest area
      <input
        type="text"
        value={answers.question18}
        onChange={e => handleChange(e, 'question18')}
      />
      </p>
      <p>19. Kangaroo visiting site
      <input
        type="text"
        value={answers.question19}
        onChange={e => handleChange(e, 'question19')}
      />
      </p>
      <p>20. Photo shop
      <input
        type="text"
        value={answers.question20}
        onChange={e => handleChange(e, 'question20')}
      />
      </p>

     </div>
      <button className="check-button" onClick={handleCheckAnswers}>Check Answers</button>
      <Link to={"/ListeningModuleSec3"} className="next_button">Move to next section</Link>
      {/* <Link to={`/ListeningModuleSec3/:${score}`} className="next_button">Move to next section</Link> */}
    </div>
  );
};
export default ListeningModuleSec2;