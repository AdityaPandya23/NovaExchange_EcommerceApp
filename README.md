# MERN AT PROJECT

1. Introduction
2. Install Tools
3. Create React App
4. Create Git Repository
   1).note: to start server go to cd frontend and then to npm start.
   2).Slug: You use a slug when you want to refer to an item while preserving the ability to see, at a glance, what the item is i.e human readable identifier.
   3). To import press ctrl + " " and tab.
   4).we can use Link instead of a to get rid of page refreshing everytime happens when we click.

Note: If any not compatible with your react version, then to install it we have to use --force
while installing it.

#08-Fetch Products...

1. Set Proxy in package.json to access frontend.
2. we use axios library to fetch data from backend.

#09-Manage State By Reducer Hook...

1. we use usereducer instead of usestate to manage complex state in the homescreen component.
2. by using use reducer logger we can debug our state and find issues in our state changes.

#10- Adding Bootstrap...

1. use react bootstrap to build ui in our web app.

#11-Create Product Component

1. use BootstrapComponents Card and Button instead of div to show products in homescreen.
2. Created two new Components product.js to render product items in list and rating.js
   to render rating for a particular product.

#12-Add Product Screen

1. Fetch products from the backend and display each product on the specified url identified
   as slug for each product.
2. Then update the backend api to fetch the requested product as per the slug
   value and then send back the response if the slug exists.
3. Then write the logic to return where we render the image for the product in one column
   and the product description,rating,price in second column and price and condition
   for if the product exist then the button for add to cart.
4. Use react template async to get the product name on the title of the tab on selecting of
   any product.

#13-Create Loading component

1. create loading component.
2. use spinner component.
3. create message component.
4. create utils.js to define getError function.

#14-Create React Context.

1. Create React context
2. define reducer.
3. create store provider
4. implement add to cart button click handler.
