// 6.- Tomando en cuenta el array 'people', se requiere obtener un nuevo array que contenga 
// los nombres completos de cada persona.

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

  const getFullNames = (usersList) => {
    let namesArray = [];
    for (let i= 0; i < usersList.length; i++) {
        let fullName = "";
        let user = usersList[i];
        let userName = user.name.first;
        let userLastName = user.name.last;
        fullName = `${userName} ${userLastName}`;
        namesArray.push(fullName);
    }
    return namesArray;
  }
  let testGetNames = getFullNames(people);
  console.log(testGetNames);

  // Code below can be refactor with map() method