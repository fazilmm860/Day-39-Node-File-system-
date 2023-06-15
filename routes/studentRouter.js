const express = require('express');

const router = express.Router();


//Student Router
router.get('/student', (req, res) => {
    res.send('<h1>Routes from Student - get method</h1>')
})
router.post('/student-post', (req, res) => {
    res.send(` Router response from Post Method!!!`)

})
router.put('/student-update', (req, res) => {
    res.send(`Rouster response from Update Method`)
});
router.delete('/student-delete', (req, res) => {
    res.send(`Router response for Delete Method`);
})

module.exports = router