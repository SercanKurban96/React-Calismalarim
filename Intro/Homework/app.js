import axios from "axios";
async function getData(Number) {
  try {
    const { data: user } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + Number
    );
    const { data: post } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + Number
    );

    console.log("User: ", user);
    console.log("Post: ", post);
  } catch (e) {
    console.log(e);
  }
}
export default getData;
