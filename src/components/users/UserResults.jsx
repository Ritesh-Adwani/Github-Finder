import { useContext} from "react";
import { HashLoader } from "react-spinners";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";
const UserResults = () => {
  const { users,loading} = useContext(GithubContext);
  
  return !loading ? (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  ) : (
    <HashLoader color="#f0edf1" className="m-auto" size={75}/>
  );
};

export default UserResults;
