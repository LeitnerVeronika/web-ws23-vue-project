# Team members:
Laura Haberl   
Veronika Leitner    
Larissa Schäfer   

# URL to live application: 
https://leitnerveronika.github.io/web-ws23-vue-project/

# Purpose of the app: 
The app is used to compare the prices of food or other items. The reduced 
and conventional product prices are displayed. This allows you to find the 
cheapest products and save money. You can use the shopping basket function 
to create a shopping list and plan your next purchase. Purchased products 
can be crossed off the list during shopping so that the list is always up 
to date. To save a product for later, you can add it to your favourites list.

# Local dev setup & configuration:
## Start local environment
Open Project in IDE  
```bash
cd .\shop-assistant\
npm install
npm run dev
```

## Run unit tests manually
```bash
npm run test:unit
```

## API requests for backend
https://shop-assistant-backend.vercel.app/api/markets  
https://shop-assistant-backend.vercel.app/api/search?productName=X  
https://shop-assistant-backend.vercel.app/api/today  

If access to our backend server or the key for the Preisrunter API is needed please contact s2310629016@students.fh-hagenberg.at

# Brief user guide:
The app can be used to discover discounts on food or other items. Data from 
various shops is available which is loaded of the Preisrunter.at API. The data 
can be filtered by the desired shop and sorted by price or product name. It is 
also possible to search for specific products. The products can be saved in the 
favourites list or can be added directly to the shopping list (shopping basket). 
By clicking on a product you can see the product page. Information such as vegan, 
vegetarian, gluten-free or lactose-free can be viewed on the product page if the 
product has these characteristics. As this function is new, it is not available 
for all products. One product that shows this properties is "BILLA Eistee Wassermelone".