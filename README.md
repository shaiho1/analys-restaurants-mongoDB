#analyze-restaurants-mongoDB

conect to a mongoDB database which each row is defind by: id, address, borough, cuisine, grades, name, restaurant_id.

Then preforming several types of queries as: find, Aggregations, Aggregation Pipeline , Crud operations.

Find queries 
1. Find all restaurants in the Brooklyn borough 
2. Find the restaurant with a restaurant_id of "40357217" 
3. Find all Donuts shops in the Brooklyn borough 
4. Find all restaurants on 11 Avenue 
5. Find all restaurants with a restaurant_id greater than "50000000" 
6. Find all restaurants in zipcodes smaller than "10500" 
7. Find all restaurant in Manhattan from the following cuisines: Italian, American, Seafood, Continental, Bakery.  

Simple Aggregations 
1. Count all restaurants in Manhattan 
2. Find the first restaurant on West 57 Street 
3. Find a distinct list of cuisines

Aggregation Pipeline 
1. match all restaurants in Queens 
2. group and count all restaurants in Queens by cuisine 
3. group all restaurants by zipcodes and it's list of cuisines 
4. result document example: {     "_id" : "10123",     "cuisines" : [ "Juice, Smoothies, Fruit Salads" ] } 
5. Find the top 10 popular cuisines in zipcode "11369" 
6. List all grades and a list of restaurants in Manhattan that got that grade. (hint: use the $unwind stage) 

Crud operations 
1. Delete the restaurant with the restaurant_id of "40363630" 
2. Update the name of "Wild Asia" restaurant to be "Wild Wild Asia" 
3. Set the cuisine of all the restaurants in Brooklyn to be "Brooklyn Style"
