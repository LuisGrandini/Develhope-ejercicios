async function getData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos")
    
    const parseData = await data.json()
    //console.log(parseData);

    
    const filterData = parseData.filter((item) => {
        //console.log(item.title == `harum ad aperiam quis`);
        return item.title == `harum ad aperiam quis`
    })

    console.log(filterData);
}

getData()