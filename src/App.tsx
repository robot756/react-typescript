import { useEffect, useState } from "react";
import MyCard from "./components/MyCard";
import { CardVariant } from "./components/MyCard";
import UserList from "./components/UserList";
import { IUser } from "./components/types/MyTypes";
import axios from "axios";
import MyList from "./components/MyList";
import UserItem from "./components/UserItem";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {

    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } 
    
    catch(e) {
      alert(e);
    }
  }

  return (
    <div>
      <MyCard
       width='200px'
       height='200px'
       variant={CardVariant.outlined}
       >
        <button>Кнопка</button>
      </MyCard>
      <MyList items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id}/> }/>
    </div>
  )
}

export default App