import { Suspense } from "react";
import { useLoaderData,defer,Await } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const {events} = useLoaderData(); //object destructuring

  return(
    <Suspense fallback={<p style={{textAlign:'center'}}>Loading...</p>}>
    <Await resolve={events}>
    {(loadedEvents)=><EventsList events={loadedEvents}></EventsList>}
    </Await>
    </Suspense>
  )
}

export default EventsPage;

export async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //return {isError:true , message:'could not fetch'};
    throw new Response(JSON.stringify({ message: "Could not fetch data" }), {
      status: 500,
    });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export function loader(){
  return defer({
    events:loadEvents()
  })

}
