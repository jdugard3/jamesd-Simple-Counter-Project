import React, { useEffect } from "react";
import Proptypes from 'prop-types'
import SimpleCounter from "./SimpleCounter";
import calculateSeconds from "../lib/time";


const Home = (props) => {
	
	useEffect(() => {
		if (props.counter === 5) {
		  alert("You reached 5 seconds in the counter!!!!");
		}
	  }, [props.counter]);
	
	return (
		<>
		<SimpleCounter 
			hundredThousandsDigit = {calculateSeconds(props.counter, 100000)}
			tenThousandsDigit = {calculateSeconds(props.counter, 10000)}
			thousandsDigit = {calculateSeconds(props.counter, 1000)}
			hundredsDigit = {calculateSeconds(props.counter, 100)}
			tensDigit = {calculateSeconds(props.counter, 10)}
			onesDigit = {calculateSeconds(props.counter, 1)}
		/>
		</>
	);
};

Home.Proptypes = {
	hundredThousandsDigit: Proptypes.number,
    tenThousandsDigit: Proptypes.number,
    thousandsDigit: Proptypes.number,
    hundredsDigit: Proptypes.number,
    tensDigit: Proptypes.number, 
    onesDigit: Proptypes.number,
	counter: Proptypes.number.isRequired,
};

export default Home;
