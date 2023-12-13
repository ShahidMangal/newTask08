const express = require('express');
const app = express();
const PORT =3000;
// Import routers
const ecommeerce = require('./ecommerceRoutes');
const password = require('./passwordStrengthRoutes');
// Mount the routers at specific paths
app.use('/ecommerceRoutes', ecommeerce);
app.use('/passwordStrength', password);
app.use((req,res)=>{
    res.send('Admin Page');
});
app.listen(PORT, () => {
console.log(`Server running on port http://localhost:${PORT}`);
});
