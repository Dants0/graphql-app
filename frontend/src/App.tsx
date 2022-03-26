import { gql, useQuery } from "@apollo/client"

const GET_USER = gql`
  query{
    users{
      id
      name
    }
  }
`;

//typescript
type User = {
  id: string;
  name: string;
  email:string;
}

function App() {
  const {data , loading} = useQuery<{users:User[]}>(GET_USER);

  if(loading) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <ul>
        {data?.users.map(user => <li key={user.id}>{"Nome:" + user.name.concat("ID: " + user.id)}</li>)}
      </ul>
    </div>
  )
}

export default App
