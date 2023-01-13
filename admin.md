what kind of functionality as an Admin do I have?
-I will be able to see all customers that are signed up on my website.
    -I am able to view all users who are signed up.
        User.js page component.
    -I should be able to view one single user information.
        -SingleUser.js page component
-I must be able to add, edit, and remove products from warehouse.
    -WareHouse.js page component.  This shows all products in my warehouse.
        -Delete button to remove products
        -Edit button to change name/quantity
        -Add button to add products


Blockers for Admin?
-What is my role as logged-in user?
    if user.isAdmin {
        I will be able to see add, edit, and delete buttons in my all products view.
        I also will be able to see all of my signed-up customers as well.
    } else if (user.LoggedIn){
        I will be able to see all products.
        I will be able to see my cart persisted in my database.
    } else {
        I will able to see all products.
        I will be able to see my cart but it's not persisted in my database.
    }
-Add a admin user to our seed.js file.