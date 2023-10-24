import {useState, useEffect, useRef} from 'react'
import photo from './assets/backgroundperu2.jpg';


function Contact({toggleContactView}) {

    // const botResponses = [
    //   <p className="bot">Hi!</p>,
    //       <p className="bot">I'm Tano Bot. I'm here to help you with any questions you might have about Tano's work.</p>,
    //       <p className="bot">How can I help you today?</p>
    // ]

    const greeting = ["Hi there! 👋🏼", "What's up! 🤜🏽🤛🏽", "Hey! ✌🏼", "Hello! 😁", "Howdy! 🤠"]
    const greetMessage = ["We're so happy you're checking out Tano's page.", "I can personally guarantee that Tano is happy you're here.", "Hope you're having an awesome day today!", "It's a pleasure meeting you. You seem very friendly!", "I can tell we'll get along great!"]

    const affirmative = ["Certainly!", "Absolutely!", "No problem!", "You got it!", "Sure!"]
    const joke = ['Did you hear they arrested the devil?', 'What did one DNA say to the other DNA?', 'What do fish say when they hit a concrete wall?', 'What do you call a fake noodle?', "What is Forest Gump's password?", 'Why does Humpty Dumpty love autumn?', 'Why are snails slow?']
    const punchline = ['Yeah, they got him on possession... lol', 'Do these genes make me look fat?... lol', 'Dam! ... lol', 'An impasta! .. lol', '1Forest1 ..lol', 'Because he had a great fall.. lol', "Because they're carrying a house on their back.. lol"]
    

   
    const AlwaysScrollToBottom = () => {
      const elementRef = useRef();
      useEffect(() => elementRef.current.scrollIntoView());
      return <div ref={elementRef} />;
    };
    

    const [responses, setResponses] = useState([])
    const [count, setCount] = useState(0)
    const [questions, setQuestions] = useState('greeting')
    const [ranNum, setRanNum] = useState(0)
    const [messageClicked, setMessageClicked] = useState(false)

    const botResponses = {
      greeting: [<p className="bot">Hi!</p>, 
                 <p className="bot">I'm Tano Bot. I'm here to help you with any questions you might have about Tano's work.</p>,
                 <p className="bot">How can I help you today?</p>],
      hello: [<p className="bot">{greeting[ranNum]}</p>, 
              <p className='bot'>{greetMessage[ranNum]}</p>, 
              <p className='bot'>Is there anything else I can help you with?</p>],
      joke: [<p className="bot">{affirmative[ranNum]} 😁</p>, 
             <p className='bot'>{joke[ranNum]}</p>, 
             <p className='bot'>...</p>,
             <p className='bot'>{punchline[ranNum]}</p>,
             <p className='bot'>Is there anything else I can help you with?</p>],
      message: [<p className="bot">Awesome!</p>,
                <p className='bot'>Tano is looking forward to speaking with you!</p>]
    }

    

    function start_bot() {
      setResponses([...responses, botResponses[questions][count]]);
    }
    

    function handleClick(e) {
      if (e.target.innerText === 'Just saying hello!') {
        setResponses([...responses, <p className='user'>Just saying hello!</p>])
        const new_hello = 'hello'
        setRanNum(Math.floor(Math.random() * 5))
        setQuestions(new_hello)
        setCount(0)
        // setCount(count - (botResponses[new_hello].length))
        
      }
      else if (e.target.innerText === 'Tell me a joke.') {
        setResponses([...responses, <p className='user'>Tell me a joke.</p>])
        const new_hello = 'joke'
        setRanNum(Math.floor(Math.random() * 5))
        setQuestions(new_hello)
        setCount(0)
      }
      else if (e.target.innerText === "We'd like to contact you!") {
        setResponses([...responses, <p className='user-contact-message'>We'd like to contact you!</p>])
        setMessageClicked(true)
        const new_hello = 'message';
        setQuestions(new_hello)
        setCount(0)
      }
    }

   

  

    useEffect(() => {
      const timeMessages = setInterval(() => {
        start_bot();
        const new_count = count + 1;
      // setCount(count + 1)
      setCount(new_count)
        if (count === botResponses[questions].length - 1) {
          clearInterval(timeMessages);
        }
      }, 1000);
  
      return () => {
        clearInterval(timeMessages);
      };
    }, [count, questions, botResponses])
    
    function cancelMessageClick() {
      setMessageClicked(false)
    }

    function closeBot() {
      toggleContactView()
    }

    

    return (
      <div className="contact">
        <div className='top-section'>
          <div className='top-section'>
            <div className='img-container'>
              <img src={photo} alt='logo' />
            </div>
            <div>
              <p>Tano Bot</p>
              <p>Ask me a question</p>
            </div>
          </div>
          <div className='close-bot' onClick={closeBot}>X</div>
        </div>
        <div className="chat">
        <div className='chat-box'>
          {responses}
          <AlwaysScrollToBottom />
        </div>
          <div className="responses">
            {messageClicked ? <a className='send-message' href="mailto:tanopaul38@gmail.com">Send Message</a> : <div className='response-button' onClick={handleClick}>Just saying hello!</div>}
            {messageClicked ? <div className='response-button' onClick={cancelMessageClick}>Go back</div>  : <div className='response-button' onClick={handleClick}>Tell me a joke.</div>}
            {messageClicked ? "" : <div className='response-button' onClick={handleClick}>We'd like to contact you!</div>}
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;