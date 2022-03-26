import { gql, useQuery } from "@apollo/client"

const GET_USER = gql`
  query{
    users{
      id
      name
    }
  }
`;

function App() {
  const {data} = useQuery(GET_USER);

  console.log(data);
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  )
}

export default App
