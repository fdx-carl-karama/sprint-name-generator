import Header from "./Header"
import Spinner from "./Spinner";

function App() {
  
  const sprintNames: string[] =[
    "JST Collider", "Love/Hate Jira", "Bento Box Sprints", "Collins Street Retros", 
    "Billable Hours", "But it's not a small PR", "No Code Violations", "Close Sprint Last Strike",
    "Velocity go live", "Sudan's Last PR", "Is it espresso or expresso", "Magical Thinking",
    "Softer Deadlines", "Approved PR", "Bulky PR", "MFE Matrix", "Vite is the way", "Ng life"
  ];

  return (
    <div>
      <Header></Header>
      <Spinner sprintNames={sprintNames}></Spinner>
    </div>
    
  );
}

export default App  