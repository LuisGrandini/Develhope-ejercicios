const URL_API = "https://jsonplaceholder.typicode.com/posts"

async function posting() {
    const data = await fetch(URL_API,{
        method: "POST", 
        body: JSON.stringify({
            title : "Nuevo posteo",
            completed : true,
        }),
        headers: {
            "Content-Type" : "application/json; charset=UTF-8",
        }
    });
    
    const res = await data.json();
    console.log(res);
}

posting()