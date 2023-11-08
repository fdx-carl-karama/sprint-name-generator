import { useState } from "react";

/**
 * In react we can create components from classes or functions
 */
function Spinner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sprintNames = [
        "JST Collider", "Love/Hate Jira", "Bento Box Sprints", "Collins Street Retros", 
        "Billable Hours", "But it's not a small PR", "No Code Violations", "Close Sprint Last Strike",
        "Velocity go live", "Sudan's Last PR", "Is it espresso or expresso", "Magical Thinking",
        "Softer Deadlines", "Approved PR", "Bulky PR", "MFE Matrix", "Vite is the way", "Ng life"
    ]
    const renderedSprintNames = sprintNames.map((sprint, index) => (
        <div key={index}>{sprint}</div>
    ));

    function handleClick() {
        if(currentIndex === sprintNames.length-1) {
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