import { connect } from "react-redux";
import { DARK_THEME, DEFAULT_THEME } from "../redux/actions/action.constants";
const Theme = (props) => {
  return (
    <div>
      <h3>Theme : {props.theme}</h3>
      <button onClick={props.darkTheme}>Dark theme</button>
      <button onClick={props.defaultTheme}>Default theme </button>
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Theme);
