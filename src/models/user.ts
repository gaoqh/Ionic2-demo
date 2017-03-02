// User model based on the structure of github api at
// https://api.github.com/users/{username}
export interface ResLogin{
    token:string;
    username:string;
    desc:string;
    success:boolean;
}