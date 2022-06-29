import { connect } from "react-redux";
import { DECREMENT, INCREMENT } from "../redux/actions/action.constants";
const Counter = (props) => {
  // console.log("Counter value", props);
  return (
    <div>
      <h2>Count : {props.count}</h2>
      <button onClick={props.incrementValue}>+ </button>
      <button onClick={props.decrementValue}> -</button>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementValue: () => {
      return dispatch({ type: INCREMENT });
    },
    decrementValue: () => {
      return dispatch({ type: DECREMENT });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
