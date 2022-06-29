import Counter from "./components/Counter";
import Theme from "./components/Theme";
import { connect } from "react-redux";
import { DARK_THEME, DEFAULT_THEME } from "./redux/actions/action.constants";
import './App.css'

function App(props) {
  // console.log("..............theme",props.theme)
  // const themeValue = props?.theme
  return (
    <div className={ props.theme === 'dark' ? "darkTheme" : "lightTheme" }>
      <div className="App-header">
        <Counter></Counter>
        <Theme></Theme>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { theme: state.theme };
};
const mapDispatchToProps = (dispatch) => {
  return {
    darkTheme: () => {
      return dispatch({ type: DARK_THEME });
    },
    defaultTheme: () => {
      return dispatch({ type: DEFAULT_THEME });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
