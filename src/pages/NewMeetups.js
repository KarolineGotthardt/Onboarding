import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetups() {
  const navigate = useNavigate();

  function addMeetup(meetupData) {
    const requestUrl =
      "https://react-academind-839df-default-rtdb.firebaseio.com/";
    const requestMeetupsTable = "meetups";
    const fullRequestUrl = `${requestUrl}${requestMeetupsTable}.json`;

    console.log(
      `Sending HTTP POST Request to Backend Firebase Test-server at ${fullRequestUrl}: ${meetupData}`
    );
    fetch(fullRequestUrl, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/", { replace: true });
    });
  }

  return (
    <div>
      <NewMeetupForm onSubmitForm={addMeetup} />
    </div>
  );
}

export default NewMeetups;
