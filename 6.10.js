// db.getCollection("massive-data").createIndex({ about :"text"})



// text indexing
db.getCollection("massive-data").find({ $text : { $search: "dolor"} }).project({ about:1})
