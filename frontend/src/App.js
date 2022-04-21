import { AppRoutes,AdminRoutes } from './routes'
import { useSelector } from 'react-redux'
import { useEffect,useState } from 'react'
import store from './store'
import axios from 'axios'
import { loadUser } from './action/userAction'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  // const [isAdmin,setIsAdmin] = useState(true)
  const [stripeApiKey,setStripeApiKey] = useState('')
  var isAdmin = false;
  

  async function getStripeApiKey(){
    const {data} = await axios.get('/api/stripe/getApiKey')
    setStripeApiKey(data.stripeApiKey)
  }
  const {user} = useSelector((state) => state.user);
  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
  },[])
  if(user){
    if(user.role==="admin"){
      isAdmin=true;
    }else{
      isAdmin=false;
    }
  }
  return (
    <div className="App">
      {isAdmin ? <AdminRoutes/> : <AppRoutes/>}
      {/* <AdminRoutes/> */}
    </div>
  );
}

export default App;
