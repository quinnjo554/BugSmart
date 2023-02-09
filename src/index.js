import hero from './asset/hero.jpg'
import MainPage from './MainPage';

//communicates with asp.net
export async function get(){
    try{
    const response = await fetch("https://localhost:7290/api/User");
    const data = await response.json();
    console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

export async function postUser(name,email) {
    try {
        const response = await fetch("https://localhost:7290/api/User", {
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({
                  "name": name,
                  "email": email
         })      
        });
    } catch (error) {
        console.log(error);
    }
}
export const Bugs = [{}];

export const navItemsLogout=[
{
    id:"login",
    content:"Logout",
    src:"./",
},
]

export const navItems=[
{
    id:"home",
    content:"Home",
    src:"./",
},
{
    id:"about",
    content:"About",
    src:"./",
},
{
    id:"signup",
    content:"Sign In",
    src:"",
},

];

export const navItemsLoggedIn=[
{
    id:"home-1",
    content:"Home",
    src:"./",
    img:'',
},
{
    id:"projects",
    content:"Your Projects",
    src:"./",
},
{
    id:"reports",
    content:"Reports",
    src:"./",
},
{
    //add a weather function
    id:"Calendar",
    content:"Calendar",
    src:"./",
},
{
    //target for when you want a bug fixed by
    //add a input where you can choose a proj and create a bug log and status
    id:"milestones",
    content:"Milestones",
    src:"./",
},
{
    id:"bugs",
    content:"Bugs",
    src:"./",
},
{
    id:"account",
    content:"Account",
    src:"./Account"
}
];




