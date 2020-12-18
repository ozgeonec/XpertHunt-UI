import axios from "axios";

export default async function fetchHome (){

    const response = await axios.get('http://localhost:9000/home')
    return  response.data
}