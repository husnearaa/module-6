

// will make a new colletion taking from the existing collection

db.test.aggregate ([
    // stage-1
    { $match: { gender: "Male" } },
    // stage-2
    { $addFields: { course: "Level-2", eduTech:"Programming Hero", mindWant:"HeartWant" } },
    // stage-3
    { $project: { course:1, eduTech:1 } },
    // stage-4
    { $out: "course-students" }
    
])



// will be marge this adta withe the text collection
db.test.aggregate ([
    // stage-1
    { $match: { gender: "Male" } },
    // stage-2
    { $addFields: { course: "Level-2", eduTech:"Programming Hero", mindWant:"HeartWant" } },
    // stage-3
   //  { $project: { course:1, eduTech:1 } },
    // stage-4
    { $marge: "test" }
    
])
