import axios from "axios";
import { auth } from "./authKey.js";

const Key = auth;

const callData = async (list) =>
{
  var show;

  try
  {
    let res = await axios.get(`https://zenithar-dev.herokuapp.com/${list}`,
    {
      headers: { 'Authorization': `${Key}` }
    }).then(res => show=res.data);

    return show;

  }catch (error) {console.log(error)}
}


export { callData }