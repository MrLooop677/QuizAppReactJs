import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { useSelector,useDispatch } from "react-redux";
import { shuffleData } from "../redux/actions/actionShuffleData";
function Menu() {
  const { gameState, setGameState, userName, setUserName } = useContext(GameStateContext);

  const Questions=useSelector(state=>state)
  const dispatch=useDispatch()

  // Used like so
  


  return (
    <div className="Menu">
      <h1>Enter Your Name:</h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setGameState("playing");
          dispatch(shuffleData(Questions))
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;
