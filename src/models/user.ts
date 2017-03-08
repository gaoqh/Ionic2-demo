// User model based on the structure of github api at
// https://api.github.com/users/{username}
import { TypedJSON, JsonObject, JsonMember } from 'typedjson-npm/src/typed-json';

export class ResLogin{
    token:string;
    username:string;
    desc:string;
    success:boolean;
}
export interface TestModel {
    id: string;
    idCode: string;
    peName: string;
}