// Se requeire poder determinar una nacionalidad específica y obetener un array que 
// contenga únicamente aquellas personas que tengan la nacionalidad indicada 

// FR -> [{nat === FR}]
// Si se usa una nacionalidad que no coincida con ninguna personalbar, devolver un string 
// que indique "No hay personas con esta nacionalidad"

const people = [
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Axelle",
        last: "Fleury",
      },
      nat: "FR",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Melati",
        last: "Oort",
      },
      nat: "NL",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Inés",
        last: "Vargas",
      },
      nat: "ES",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Marcus",
        last: "Garrett",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Vasilina",
        last: "Motrichko",
      },
      nat: "UA",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Leuntje",
        last: "Van Harmelen",
      },
      nat: "NL",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Tristan",
        last: "Gauthier",
      },
      nat: "FR",
    },
    {
      gender: "female",
      name: {
        title: "Madame",
        first: "Marianne",
        last: "Charles",
      },
      nat: "CH",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Maksim",
        last: "Bunechko",
      },
      nat: "UA",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Coline",
        last: "Mathieu",
      },
      nat: "FR",
    },
  ];

  const filterByNationality = (usersArray, nationality) => {
    let result = [];
    for (let i = 0; i < usersArray.length; i++) {
        let user = usersArray[i];
        let userNat = user.nat;
        userNat === nationality && result.push(user);
    }
    return !result.length ? "No hay resultados" : result;
  }

  let filterTest1 = filterByNationality(people, "FR");
  console.log(filterTest1);
  let filterTest2 = filterByNationality(people, "UG");
  console.log(filterTest2);
  let filterTest3 = filterByNationality(people, "ES");
  console.log(filterTest3);