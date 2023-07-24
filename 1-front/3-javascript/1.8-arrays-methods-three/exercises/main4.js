// 4.- Se necesita saber la edad promedio de las personas en la lista

const people = [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Valentin",
        last: "Centeno",
      },
      dob: {
        date: "1956-09-17T13:38:41.475Z",
        age: 66,
      },
      nat: "MX",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Juan",
        last: "Watkins",
      },
      dob: {
        date: "1956-08-17T08:44:24.512Z",
        age: 66,
      },
      nat: "IE",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Bertram",
        last: "Hertel",
      },
      dob: {
        date: "1963-10-18T20:29:48.819Z",
        age: 59,
      },
      nat: "DE",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Olelko",
        last: "Ovdiienko",
      },
      dob: {
        date: "1993-12-20T00:38:16.473Z",
        age: 29,
      },
      nat: "UA",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Becky",
        last: "Ward",
      },
      dob: {
        date: "1986-12-22T14:12:54.641Z",
        age: 36,
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Harold",
        last: "Edwards",
      },
      dob: {
        date: "1969-06-07T04:31:39.777Z",
        age: 54,
      },
      nat: "AU",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Aaron",
        last: "Feragen",
      },
      dob: {
        date: "1951-07-14T08:17:03.136Z",
        age: 71,
      },
      nat: "NO",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Ted",
        last: "Kelly",
      },
      dob: {
        date: "1964-01-27T00:10:59.218Z",
        age: 59,
      },
      nat: "AU",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Jerry",
        last: "Johnston",
      },
      dob: {
        date: "1992-12-05T03:07:17.041Z",
        age: 30,
      },
      nat: "IE",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Alexis",
        last: "Nguyen",
      },
      dob: {
        date: "1994-10-08T06:03:13.198Z",
        age: 28,
      },
      nat: "FR",
    },
  ];

  // getAgeAverage with 'for'
  let getAgeAverage = (age) => {
    let ageSum = 0;
    let ageAverage = 0;

    for (let i = 0; i < age.length; i++) {
        let ages = age[i];
        ageSum += ages.dob.age;
    }
    ageAverage = ageSum / age.length;
    return ageAverage;
  }

  console.log(getAgeAverage(people)); // 49.8

  // getAverageAge with 'forEach()'
  let getAverageAgeForEach = (people) => {
    averageAge = 0;
    people.forEach(() => averageAge += ages.dob.age);
    averageAge /= people.length;
    return averageAge; 
  }
  console.log(getAgeAverage(people));