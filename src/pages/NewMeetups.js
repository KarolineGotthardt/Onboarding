import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetups() {
  function addMeetup(meetupData) {
    const requestUrl =
      "https://react-academind-839df-default-rtdb.firebaseio.com/";
    const requestMeetupsTable = "meetups";
    const fullRequestUrl = `${requestUrl}${requestMeetupsTable}.json`;

    console.log(
      `Sending HTTP Request to Backend Firebase Test-server at ${fullRequestUrl}: ${meetupData}`
    );
    fetch(fullRequestUrl, {
      method: "POST",
      body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json"
        }
    });
  }

  return (
    <div>
      <NewMeetupForm onSubmitForm={addMeetup} />
    </div>
  );
}

export default NewMeetups;
