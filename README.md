        BUILD A RESTFULL API WITH EXPRESS NODE.JS AND MONGO DB
    1. SET UP
        1.intall express
        2. install mongoose nodemon body-parser shortid
        3. add line: ("server": "nodemon <-name of app to build>"),
        4. cmd => npm run <-name of app to build>
    2.set up server.js page
        1.route (get)
        2.connect to mongodb
        3. do middleware post
        4.create folder model contained schema
        5. create post schema
        6.intall body-parser to post (must put before all router)
    3.method get
        1.use method find() to finded all data = variable
        2.res.json(<-variable>) to converse to json
        3.use try catch to catched err
        4. use async-await
    4.method post
        1. new Post({key:res.body...} ) = variable
        2.variale.save() --> this is promise
        3..then(data=>{ res.json(data)})
        4..catch(err =>{console.log({message:err})})
    5.method find by id(mongo) /get(express)
        1.use paramid for './:<-paramsId>'
        2.use method findById(req.params.<-params id>) = variable
        3.res.json(variable)
        4.try - catch to examinate err
        5.async - await
    6.method remove(mongo) /delete(paramsId)(express)
         1.use paramid for './:<-paramsId>'
         2. use method remove({_id:param})
         3.res.json(variable)
         4.try - catch to examinate err
         5.async - await
    7.method updateOne(mongo) /patch(paramsId)(express)
        1.use paramid for './:<-paramsId>'
         2. use method updateOne({_id:param},{$set:req.body.....})
         3.res.json(variable)
         4.try - catch to examinate err
         5.async - await
    8. require cors npm to call API (*****)
------------------------------------------------------------------------------------------------------------------------------------------'
front-end
1.footer and header
    - install reactstrap bootstrap
    - install and use flaticon and google-font
    - set up root color
    - install and use style-components
2.product page
3.router 
    -router for product
4.product page
5.use redux
    + redux for product to call all product
    + fetchPeoduct ( axios) to call data
6.filter
7.cart page
    + redux cart
    + addToCArt
    + removeFromCart
    + cart page
    + cart list page
8.order page
    + carete server to put api user's information
    + redux order
    
