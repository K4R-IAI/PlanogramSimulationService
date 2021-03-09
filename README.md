# PlanogramSimulationService
Service provides products.csv when shelvesMapping.json is provided

Once you pull new version from github, and run docker.sh, The planogram simulator RESTful service will be available at : 

POST - http://localhost:3567/setshelves 
- to set the shelvesMapping key with shelvesMapping.json file

GET - http://localhost:3567/getproducts 
- to get the products in json format. 
