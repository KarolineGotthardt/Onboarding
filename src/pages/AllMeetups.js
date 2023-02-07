import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    const requestUrl =
      "https://react-academind-839df-default-rtdb.firebaseio.com/";
    const requestMeetupsTable = "meetups";
    const fullRequestUrl = `${requestUrl}${requestMeetupsTable}.json`;

    console.log(
      `Sending HTTP GET Request to Backend Firebase Test-server at ${fullRequestUrl}`
    );
    setIsLoading(true);
    fetch(fullRequestUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        console.log(meetups);
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

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
