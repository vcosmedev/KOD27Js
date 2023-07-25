    /* Nacionalidades */
    let nationalities = [
    "MX",
    "IE",
    "DE",
    "UA",
    "GB",
    "AU",
    "NO",
    "AU",
    "IE",
    "FR",
    "MX",
    "GB",
    "IE",
  ];
  /* Devolver, del array 'nationalities' el total de nacionalidades sin que estén duplicadas */
  const singleNats = () => nationalities.reduce((accum, curr) => {
    return accum.includes(curr) ? accum : [...accum, curr];
  }, []);
  console.log(singleNats(nationalities));

/*   To Do List */  
const todos = [
    {
      title: "todo 1",
      completed: true,
      priority: 0,
    },
    {
      title: "todo 2",
      completed: false,
      priority: 0,
    },
    {
      title: "todo 3",
      priority: 1,
      completed: false,
    },
    {
      title: "todo 4",
      priority: 5,
      completed: false,
    },
    {
      title: "todo 5",
      priority: 3,
      completed: false,
    },
  ];

  /* De la lista de tareas dada en el array anterior, devuelve aquellas tareas que están incompletas */
  const filterByUncompleted = (todosArr) => todosArr.filter(({ completed }) => !completed);
  console.log(filterByUncompleted(todos));

  const filterWithRedce = (todosArr) => todosArr.reduce(((accum, curr) => !curr.completed ? [...accum, curr] : accum), []);
  console.log(filterWithRedce(todos));

  let charArray = ["I", "s", "r", "a"];