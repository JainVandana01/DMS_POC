export const basicFetch = async(endpoint: string) => {
    console.log("endpoint ", endpoint)
const response = await fetch(endpoint, {
    mode: 'no-cors',
    method: "get",
    headers: {
         "Content-Type": "application/json"
    },
});
console.log("response ", response)
if(!response.ok) throw new Error("!Error");
const data = await response.json();
console.log("data ", data)
return data;

}

export const fetchOrder = async()=>{

    return await basicFetch('/getOrderList');


}

export async function getStaticProps() {
    // fetch the blog posts from the mock API using the environment variable
    const res = await fetch('http://localhost:3001/getOrderList', {
        mode: 'no-cors',
    });
    const posts = await res.json();
    console.log("posts ", posts)
    return posts;
  }