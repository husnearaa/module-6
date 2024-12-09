
// Explore $group with $unwind aggregation stage

//
db.test.aggregate([

    //   stage-1 
    
        { $unwind:"$friends"},
    // stage-2
    {
        $group: { _id: "$friends", count: { $sum: 1 } }
    }
   
])



// example-2
db.test.aggregate([

    //   stage-1 
    
        { 
            $unwind:"$interests"
            
        },
    // stage-2
    {
        $group: { _id: "$age", interestsPerAge: { $push: "$interests" } }
    }
   
])

