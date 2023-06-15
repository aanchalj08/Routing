import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
//import { useNavigation } from "react-router-dom";

function RootLayout(){
    //const navigation=useNavigation();
    return (
        <>
        <MainNavigation></MainNavigation>
        <main> 
        {/*navigation.state==='loading' && <p>Loading...</p>*/}
        <Outlet></Outlet>   
        </main>
     
        </>

    );
}

export default RootLayout;