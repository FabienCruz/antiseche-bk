const Article = require('../models/schema');

exports.getAllArticles = (request, response, next) => {
    response.json({ message: 'test avec nodemon' });
}

