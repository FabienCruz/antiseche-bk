const Article = require('../models/article');

exports.getAllArticles = (request, response, next) => { 
    response.json({ message: 'test avec nodemon' });
}

