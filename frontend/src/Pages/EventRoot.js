import { Outlet } from "react-router-dom";
import EventsNavigation from '../components/EventsNavigation';


function EventRootLayout(){
    return(
        <>
        <EventsNavigation></EventsNavigation>
        <Outlet></Outlet>
        </>

    );
}

export default EventRootLayout;