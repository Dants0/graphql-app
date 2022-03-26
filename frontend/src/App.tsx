import { gql, useQuery } from "@apollo/client"
import { NewUserForm } from "./components/NewUserForm";

const GET_USER = gql`
  query{
    users{
      id
      name
      email
      password
    }
  }
`;

//typescript
type User = {
  id: string;
  name: string;
  email:string;
  password: string;
}

function App() {
  const {data , loading} = useQuery<{users:User[]}>(GET_USER);

  if(loading) {
    return <p>Carregando...</p>
  }

  return (
      <div>
        <ul>
          {data?.users.map(user => <li key={user.id}>Nome:{user.name} || Email:{user.email} || Senha:{user.password}</li>)}
        </ul>
        <NewUserForm/>
      </div>
  )
}

export default App
