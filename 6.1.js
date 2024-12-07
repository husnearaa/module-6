
// learned $match , $project aggregation stage



// $match operator
db.test.aggregate ([
    // stage-1
    { $match: { gender: "Male"} }
])



// $match operator - method 2

db.test.aggregate ([
    // stage-1
    { $match: { gender: "Male", age: { $lt: 30} } },
    // stage-2
    { $project: { name:1, gender:1 } }
])


