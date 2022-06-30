import {useState} from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { DECREMENT, INCREMENT, INCREMENTBY5, DECREMENTBY5, RESET, TYPECOUNT } from "../redux/actions/action.constants";
const Counter = (props) => {
  // console.log("Counter value", props);
  const [value, setValue] = useState('')
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <h2>Count : {props.count}</h2>
        <button onClick={props.incrementValue}> + </button>
        <button onClick={props.decrementValue}> - </button>
        <button onClick={props.resetValue}> Reset</button>
        <button onClick={props.incrementby5Value}> + 5 </button>
        <button onClick={props.decrementby5Value}> - 5 </button>
        <h2>
          Please add input number <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        </h2>
        <button onClick={(e) => dispatch({type: TYPECOUNT, payload: value,setValue })}>Add</button>    
      </div>
    </>
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
    incrementby5Value: () => {
      return dispatch({ type: INCREMENTBY5 }); 
    },
    decrementby5Value: () => {
      return dispatch({ type: DECREMENTBY5 }); 
    },
    resetValue: () => {
      return dispatch({ type: RESET})
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
