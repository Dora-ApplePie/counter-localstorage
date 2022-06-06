import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./BLL/store";
import {incValueAC} from "./BLL/counter-reducer";

function App() {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch();

    // const [value, setValue] = useState<number>(0);
    //
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('counterValue');
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString);
    //         setValue(newValue);
    //     }
    // },[])
    //
    // useEffect(() => {
    //     localStorage.setItem('counterValue', JSON.stringify(value));
    // },[value])

    const incHandler = () => {
        dispatch(incValueAC())
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>INC</button>
        </div>
    );
}

export default App;
