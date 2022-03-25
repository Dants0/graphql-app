import { Arg, Mutation,Query,Resolver } from "type-graphql";
import { User } from "../models/User";
import  crypto from "crypto";
import { min } from "class-validator";

//query : buscar dados

//mutation : criar, alterar, deltar dados


@Resolver()

export class UserResolver{

    private data:User[] = [];

    @Query(() => [User])
    async users(){
        return this.data
    }

    @Mutation(() => User)
    async createUser(
        @Arg('name') name: string
    ){
        const user = {
            id:crypto.randomUUID(),
            name
        }
            this.data.push(user);

            return user;

    }
}