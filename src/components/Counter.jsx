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

//connect -- HOC higer order component
// function -- input component --  another component
// connect -- input Counter --- output Counter connected to store and redux
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
