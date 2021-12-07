const router = require('express').Router();
const axios = require('axios');
require('dotenv').config();

router.get('/therapy', async (req, res) => {
    console.log("therapy")
    const data = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?types=doctor&name=aa_support_group&sensor=false&radius=5000&key=${process.env.API_KEY}`)
    res.json(data)
})





// router.get('/therapy', async (req, res) => {
//     console.log("Therapy")
//     const data = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?types=doctor&name=aa_support_group&sensor=false&radius=5000&key=AIzaSyC23nfE1PhzLbG546fR0JtV9PrwJg8iyMY`)
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(error => {
//       console.log(error);
//     })
// })

module.exports = router;