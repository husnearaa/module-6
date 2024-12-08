/**
 *  from this lecture i have learned that
 * to do group search need a "underscore Id"
 * and based on that id will be group search
 */



//
db.test.aggregate([
  //   stage-1
  { $group: { _id: "$address.country" } },
]);




//
db.test.aggregate([
  //   stage-1
  { $group: { _id: "$age", count: { $sum: 1 } } },
]);




//
db.test.aggregate([
  //   stage-1
  { $group: { _id: "$address.country", count: { $sum: 1 } } },
]);





//
db.test.aggregate([
  //   stage-1
  { $group: { _id: "$address.country", showNameList: { $push: "$name" } } },
]);





// this data will show serial wise in assending order
db.test.aggregate([
  //   stage-1
  {
    $group: {
      _id: "$address.country",
      count: { $sum: 1 },
      showNameList: { $push: "$name" },
    },
  },
]);





//
db.test.aggregate([
  //   stage-1
  {
    $group: {
      _id: "$address.country",
      count: { $sum: 1 },
      showNameList: { $push: "$$ROOT" },
    },
  },
]);






// this is the final group code.
db.test.aggregate([
  //   stage-1
  {
    $group: {
      _id: "$address.country",
      count: { $sum: 1 },
      fullDoc: { $push: "$$ROOT" },
    },
  },
  // stage-2
  {
    $project: {
      "fullDoc.name": 1,
      "fullDoc.email": 1,
      "fullDoc.phone": 1,
    },
  },
]);
