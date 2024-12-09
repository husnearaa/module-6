
// $bucket, $sort, and $limit aggregation stage



// aggregation way
db.test.aggregate([

    //   stage-1 
        { 
            $bucket:{
                groupBy: "$age",
                boundaries: [ 20, 40, 60, 80],
                default: "the biggers of up to 80",
                output: {
                    count: {$sum: 1 },
                    whoAreThere: { $push: "$$ROOT" }
                }
            }
            
        },
        
    // stage-2
    {
        $sort: { count: -1 }
    },
    //stage-3
    {
       $limit:2 
    },
    // stage-4
    {
       $project:{
           count: 1
       } 
    }
        
   
])




// normal way
db.test.find({}).sort({age: -1}).project({age:1}).limit(2)
