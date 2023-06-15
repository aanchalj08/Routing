
import EventItem from "../components/EventItem";
import { useRouteLoaderData,json,redirect } from "react-router-dom";


function EventDetail(){
   
    const data=useRouteLoaderData('event-detail');
    return (
        <>
        <EventItem event={data.event}></EventItem>
        </>


    );
}

export default EventDetail;

export async function loader({request,params}){
    const id=params.eventId;

    const response=await fetch('http://localhost:8080/events/'+id);

    if(!response.ok){
        throw json({message:'Could not fetch data'},{status:500});
    }else{
        return response;
    }

}

export async function  action({request,params}){
    const id=params.eventId;

    const response=await fetch('http://localhost:8080/events/'+id,{
        method:request.method
    });

    if(!response.ok){
        throw json({message:'Could not delete data.'},{status:500});

    }
    return redirect('/events');
    

}
