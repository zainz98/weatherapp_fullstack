import styles from './App.module.css';
import ClickMe from './components/ClickMe';

// This is the main component of the react application.
// Every React component function returns a JSX element (HTML like element)
// where we can add as many components ads we want,
// In this case we use the Sub Component ClickMe three times, using two parameters:
// h2_text, and button_text
// Check ClickMe.js to learn how it uses these parameters (props)
function App() {
  return (
    <div className="App">
      <h1 className={styles.h1}>This is a test</h1> {/* Note that HTML's class keywords is passed as className*/}
      <ClickMe h2_text="Click the button" button_text="Click Me!"/>
      <ClickMe h2_text="Click this button too" button_text="Click Me too!" />
      <ClickMe h2_text="Click this button three" button_text="Click Me three!" />
    </div>
  );
}

export default App;
