// find Query
// Q1
db.getCollection('restaurantDB_shai_h').find({"borough" : "Brooklyn"})
//Q2
db.getCollection('restaurantDB_shai_h').find({"restaurant_id" : "40357217"})
//Q3
db.getCollection('restaurantDB_shai_h').find({"cuisine" : "Donuts","borough" : "Brooklyn"})
//Q4
db.getCollection('restaurantDB_shai_h').find({"address.street" : "11 Avenue"})
//Q5
db.getCollection('restaurantDB_shai_h').find({"restaurant_id":{$gt: "50000000"}})
db.getCollection('restaurants').find({"restaurant_id":{$gt:"50000000"}})
//Q6
db.getCollection('restaurantDB_shai_h').find({"address.zipcode":{$lte:"10500"}})
//Q7
db.getCollection('restaurantDB_shai_h').find( {$or: [{"cuisine" :"Italian"}, {"cuisine" : "American"}, {"cuisine" : "Seafood"}, {"cuisine" : "Continental"}, {"cuisine" : "Bakery"}]})
//simple aggregation
//Q1
db.restaurantDB_shai_h.find().count()
//Q2
db.restaurantDB_shai_h.find( { "adress.street" : "West 57"}, 
                            { "adress.street.$": 1 } )
db.students.find( { semester: 1, grades: { $gte: 85 } },
                  { "grades.$": 1 } )
//Q3
db.restaurantDB_shai_h.find().sort( { cuisines: -1 } )
//Aggregation Pipeline 
//Q1+Q2
 db.getCollection('restaurants').aggregate([
    {
      $match: {
        borough:"Queens"  
      }
    },
    {
      "$group": {
          _id:"$cuisine",
          count:{
              $sum:1
              }
          }
    }
  ]
)
//Q3+4
 db.getCollection('restaurants').aggregate([
    {
      "$group": {
          _id:"$cuisine",
          _id:"$address.zipcode",
          }
    }
  ]
)
//Q5
 db.getCollection('restaurants').aggregate( [
    {
        $match:{
             "address.zipcode":"11369"  
              }
    },
    {
      "$group" : {
          _id:"$cuisine",
          count: {
              $sum: 1
              }
          } 
       },
     {"$sort": {"count":-1} },
     {"$limit":10}
  ])
//Q6
db.getCollection('restaurants').aggregate ( [
    { 
        "$match":{"borough":"Manhattan"}  
        },
    { 
        "$unwind":"$grades" 
    },
    { 
        "$group":{
            _id:"$grades.grade",
            restaurants: {
                $addToSet:"$name"
            }
        }
    }
]);
//Crud operations 
//Q1
db.getCollection('restaurantDB_shai_h').remove({ "restaurant_id" : 40363630 }) 
//Q2
db.sales.update(
   { name: "Wild Asia" }, 
   {
       name: "Wild Wild Asia"
       },
       { upsert: true }
)
//Q3
db.sales.update(
   { borough: "Brooklyn" }, 
   {$set:{
       borough: "Brooklyn Style"
       }},
       { upsert: true }
)