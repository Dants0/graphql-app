import {gql, useMutation} from "@apollo/client";
import {GET_USER} from "../App"
import { FormEvent,useState } from "react";
import * as styles from './newuserform.css'

const CREATE_USER = gql`
    mutation($name:String! $email:String! $password:String!){
        createUser(name:$name email:$email password:$password){
            id
            name
            email
            password
        }
    }
`;

export function NewUserForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUser, {data, loading, error}] = useMutation(CREATE_USER);

    async function handleCreateUser(event:FormEvent){
        event.preventDefault();


        if(!name||!email||!password){
            return alert("Please add your informations");
        }

        await createUser({
            variables:{
                name,
                email,
                password
            },
            refetchQueries:[GET_USER]
        })

        console.log(data);
    }
    return(
        <div className="FormVite">
            <form onSubmit={handleCreateUser}>
                <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Nome"/>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email"/>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password"/>
                <button type="submit" className="btn">Enviar</button>
            </form>
        </div>
    )
}

export default NewUserForm