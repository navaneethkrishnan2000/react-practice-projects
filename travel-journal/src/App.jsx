import Header  from "./components/Header"
import Entry from "./components/Entry"

export default function App() {

  const hours = new Date().getHours();
  let timeOfDay;

  if(hours < 12) {
    timeOfDay = "morning";
  } else if (hours >=12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return(
    <>
      <Header />
      <Entry />
      <h1>I'm the App component</h1>
      <h1>{timeOfDay}</h1>
    </>
  )
}