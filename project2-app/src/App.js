import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyInputComponent></MyInputComponent>
      <MyDynamicInputComponent></MyDynamicInputComponent>
      <MyComponent></MyComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <FourthComponent></FourthComponent>
    </div>
  );
}

const MyComponent = () => {
  return (
    <div>
      <h1>React Heading </h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        error aperiam temporibus sunt alias iusto ex facere blanditiis non
        eligendi impedit a et rerum, cumque beatae harum fuga ut! Vero.
      </div>

      <h4>Heading 6</h4>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit assumenda
        sequi, excepturi molestiae veniam, error officiis earum repellat iste
        iure rerum sed sit placeat facere ex dignissimos! Temporibus, sit
        facere.
      </div>
    </div>
  );
};

const SecondComponent = () => {
  return (
    <div>
      <h1>Second Component</h1>
    </div>
  );
};

// Equivalent to class in Java
function ThirdComponent() {
  // NOT REACT AWARE
  const localCounter = 100;

  // REACT AWARE
  const [counter] = useState(100);

  // VIEW : JSX
  return (
    <div>
      <h1>Third Component</h1>
      <div>React Not Aware - {localCounter} </div>
      <div>React Aware - {counter}</div>
    </div>
  );
}

// Equivalent to class in Java
function FourthComponent() {
  let localCounter = 100;
  let [counter, setCounter] = useState(100);

  const updateCounter = () => {
    localCounter = localCounter + 1;

    // counter = counter + 1;
    setCounter(counter + 1);

    console.log("Counter Operation", localCounter, counter);
  };

  // VIEW IS NOT GETTING UPDATED
  return (
    <div>
      <h1>Fourth Component - Event / Action /Click </h1>
      <input type="button" value="Update Counter" onClick={updateCounter} />
      <input
        type="button"
        value="Update Counter1"
        onClick={() => updateCounter()} // We can PASS PARAMETER here.
      />

      <div>React Not Aware - {localCounter} </div>
      <div>React Aware - {counter}</div>
    </div>
  );
}

const MyDynamicInputComponent = () => {
  const [list, setList] = useState([]);

  // STEP 1
  const [tweetInput, setTweetInput] = useState("");

  // STEP 2 :: e is important here;
  const readAndUpdateTweet = (e) => setTweetInput(e.target.value);

  const postTheTweet = () => {
    setList([tweetInput, ...list]);
    setTweetInput("");
  };

  return (
    <div>
      <h2>Tweets</h2>
      <div>
        {/** STEP 3 value and onChange */}
        <input
          type="text"
          value={tweetInput}
          onChange={(e) => readAndUpdateTweet(e)}
          placeholder="your thought..."
        />
        <input
          type="button"
          value="Tweet here"
          onClick={() => postTheTweet()}
        />
      </div>

      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

const MyInputComponent = () => {
  const [list, setList] = useState(["Delhi", "Kolkata"]);

  const postTheTweet = () => {
    setList(["MUMBAI", ...list]);
  };

  return (
    <div>
      <h1>Mini Twitter</h1>
      <div>
        <input type="text" value="" placeholder="your thought..." />
        <input
          type="button"
          value="Tweet here"
          onClick={() => postTheTweet()}
        />
      </div>

      <h2>Tweets</h2>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};
