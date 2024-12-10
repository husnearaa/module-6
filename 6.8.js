// $lookup stage, embedding vs referencing


/***
 * 
 * we can keep data in database in 2 way.
 * 
 * 1. embedding
 * 2. referencing
 * 
 * when the  refering way will be use then there will be 2 collection
 * so if need to take 2 collection data together then have to use $lookup operator
 * 
 */



db.orders.aggregate([
    
    {
         $lookup: {
            from: "<collection to join>",
            localField: "<field from the input documents>",
            foreignField: "<field from the documents of the from collection>",
            as: "<output array field>"
          }
     
    }
    
     ])



     