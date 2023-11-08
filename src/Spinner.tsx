import { ReactElement, useState } from "react";

/**
 * In react we can create components from classes or functions
 */
interface SpinnerProps {
    sprintNames: string[];
}

function Spinner(props: SpinnerProps): ReactElement {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const renderedSprintNames = props.sprintNames.map((sprint, index) => (
        <div key={index}>{sprint}</div>
    ));

    function handleClick() {
        if(currentIndex === props.sprintNames.length-1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    return (
        <div>
            <p>{renderedSprintNames[currentIndex]}</p>
            <button onClick={handleClick}>
                Generate Name
            </button>
        </div>
    );
}

export default Spinner;