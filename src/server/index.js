const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const multipart = require('connect-multiparty');
const config = require('./config/config');

const app = express();

// models
const models = require('./models');

// Sync Database
models.sequelize.sync().then(() => {
  console.log('connected to database');
}).catch((err) => {
  console.log(err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(multipart({
  uploadDir: config.tmp
}));
app.use(cors());

// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');

passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

passport.authenticate('jwt', { session: false });


app.use(config.imgRoot, express.static(config.uploadDir));
app.use('/attach', express.static('/home/indiens/upload/attach/'));

// routes
app.use('/auth', require('./routes/auth'));
app.use('/TB_MESSAGE', require('./routes/TB_MESSAGE'));
app.use('/TB_PORTFOLIO', require('./routes/TB_PORTFOLIO'));
app.use('/TB_MEMBER', require('./routes/TB_MEMBER'));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
