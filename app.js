const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const pug = require('pug');

dotenv.config();
const { sequelize } = require('./models');
const indexRouter = require('./routes');
const signRouter = require('./routes/sign');
const userRouter = require('./routes/user');
const logoutRouter = require('./routes/logout');

const app = express();

app.set('port', process.env.PORT || 1000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

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
  const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});