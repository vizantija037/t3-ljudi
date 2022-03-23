Box.Application.addService("object", function (application) {
  let mainList = [
    {
      id: 1,
      name: "Perica Peric",
      age: "44",
      mail: "pera@gmail.com",
    },
    {
      id: 2,
      name: "Djurica Djuric",
      age: "30",
      mail: "djura@gmail.com",
    },
    {
      id: 3,
      name: "Sadista Sadistovic",
      age: "41",
      mail: "sadist@gmail.com",
    },
  ];

  return {

    serviceOut: mainList,


  };
});
