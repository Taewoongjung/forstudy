const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const pug = require('pug');

dotenv.config();
const indexRouter = require('./routes');
const signRouter = require('./routes/sign');
const userRouter = require('./routes/user');
const logoutRouter = require('./routes/logout');

const app = express();

app.set('port', process.env.PORT || 1000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

//var date = new Date();
//date.setTime(date.getTime() + 10000*1000); //10 sec

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: false,
    secure: false,
  },
  name:"cookie-session",
}));

app.use('/', indexRouter);
app.use('/sign', signRouter);
app.use('/user', userRouter);
app.use('/logout', logoutRouter);

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});