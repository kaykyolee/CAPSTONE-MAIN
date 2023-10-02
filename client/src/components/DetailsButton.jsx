// This button handles the opening of a single drink's details

import { useState } from "react";
import SingleDrinkDetails from "./SingleDrinkDetails";

export default function DetailsButton({ drink }) {
	const [isOpen, setIsOpen] = useState(false);
	function handleClick() {
		setIsOpen(!isOpen);
	}

	return (
		<>
			<button onClick={handleClick}>
				{!isOpen ? "See Drink Details" : "Close details"}
			</button>
			<div>{isOpen && <SingleDrinkDetails key={drink} drinkId={drink} />}</div>
		</>
	);
}
