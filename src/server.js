const express = require('express')
const axios = require('axios')

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/synonyms/:word', (req, res) => {
    const config = {
        headers: {'Accept': 'application/json', 'app_id': 'aef40359', 'app_key': '135ef42b18b1431f4937f092e5f15bda'}
    }
    console.log('test')
    axios.get('https://od-api.oxforddictionaries.com/api/v1/entries/en/' + req.params.word + '/synonyms', config).then(function(response){
        res.json(response.data)
    }).catch(function(error){
        res.status(200).send({results: '404 Not Found'})
    })
})

app.listen(process.env.PORT || 5000)
