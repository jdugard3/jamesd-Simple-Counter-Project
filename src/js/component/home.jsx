import React from "react";
import Proptypes from 'prop-types'
import SimpleCounter from "./SimpleCounter";
import calculateSeconds from "../lib/time";


const Home = (props) => {
	
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
}

export default Home;
