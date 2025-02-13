/*function getData(dataID, getnextData) {
            setTimeout(() => {
                console.log("data", dataID);
                if(getnextData){
                    getnextData();
                }
            }, 3000);
    }*/

function getData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataID);
            resolve(200);
        }, 3000);
    });
}



//async await
async function getAllData() {
    console.log("getting data 1");
    await getData(1);
    console.log("getting data 2");
    await getData(2);
    console.log("getting data 3");
    await getData(3);
}

//promise chaining
/*console.log("getting data 1");
getData(1)
.then((res)=>{
    console.log("getting data 2");
    return getData(2);
})
.then((res)=>{
    console.log("getting data 3");
    return getData(3);
})
.then((res)=>{
    console.log("getting data 4");
    return getData(4);
})
.then((res)=>{
    console.log("getting data 5");
    return getData(5);
})
.then((res)=>{
    console.log("getting data 6");
    return getData(6);
})*/

//callback hell
/*getData(1, ()=>{
    console.log("getting data 2");
    getData(2, ()=>{
        console.log("getting data 3");
        getData(3, ()=>{
            console.log("getting data 4");
            getData(4, ()=>{
                console.log("getting data 5");
                getData(5, ()=>{
                    console.log("getting data 6");
                    getData(6);
                });
            });
        });
    });
});*/
