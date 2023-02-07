import MeetupList from "../components/meetups/MeetupList";
import { useState } from "react";


function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  function getMeetup() {
    const requestUrl =
      "https://react-academind-839df-default-rtdb.firebaseio.com/";
    const requestMeetupsTable = "meetups";
    const fullRequestUrl = `${requestUrl}${requestMeetupsTable}.json`;

    console.log(
      `Sending HTTP GET Request to Backend Firebase Test-server at ${fullRequestUrl}`
    );

    /*fetch(fullRequestUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoadedMeetups(data);
        setIsLoading(false);
      });*/
  }

  if (isLoading) {
    return (
      <section>
        <p>Loading Meetups ...</p>
      </section>
    );
  }

  return (
    <div>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
}

export default AllMeetups;
