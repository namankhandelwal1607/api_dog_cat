async function get()
{
    let p= await getFacts();
    console.log(p);
    let b=document.querySelector("#a");
    b.innerText=p;
}

let url="https://catfact.ninja/fact";
 async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
 }catch(e){
    console.log(e);
 }
}

async function pic()
{
    let p=await getting();
    let c=document.querySelector("#b");
    c.setAttribute("src",p);
}

let urli="https://dog.ceo/api/breeds/image/random"
async function getting(){
    try{
        let res = await axios.get(urli);
        let a=res.data.message;
        return a;
 }catch(e){
    console.log(e);
 }
}