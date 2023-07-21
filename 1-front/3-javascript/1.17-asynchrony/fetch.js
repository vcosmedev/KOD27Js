// read
const getKoders = async () => {
    let response = await fetch('https://javascript27kod-default-rtdb.firebaseio.com/.json');
    let data = await response.json();
    console.log(response);
    console.log(data);
}
getKoders();

// create
const createKoderVictor = async (newKoder) => {
    let response = await fetch('https://javascript27kod-default-rtdb.firebaseio.com/.json', {
        method: "POST",
        body: JSON.stringify(newKoder),

    });
    let data = await response.json();
    return data;
}
// const createKoder = async (newKoder) => {
//     let response = await fetch('https://javascript27g-default-rtdb.firebaseio.com/koders/.json', {
//         method: "POST",
//         body: JSON.stringify(newKoder),

//     });
//     let data = await response.json();
//     return data;
// }

