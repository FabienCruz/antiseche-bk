const Article = require('./article');
const Site = require('./site');
const Thema = require('./thema');
const User = require('./user');
const Access = require('./access');

Site.hasMany(Article);
Article.belongsTo(Site);

Site.hasMany(Thema);
Thema.belongsTo(Site);

Site.belongsToMany(User, { through: 'Access' });
User.belongsToMany(Site, { through: 'Access' });

module.exports = { Article, Site, Thema, User, Access }