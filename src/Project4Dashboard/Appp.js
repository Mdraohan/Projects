import {useSelector } from "react-redux";

import Login from "./Login";
import { selectUser } from "./features/userSlice";
import Logout from "./Logout";

function Appp() {
  const user=useSelector(selectUser)
  return (
    <>  
      {user ? <Logout/>: <Login/>}
    </>
  );
}

export default Appp;





/////////////project 4
// import store from './Project4Dashboard/Redux/store';
// import { Provider} from "react-redux";
{/* <Provider store={store}> </Provider>  */}