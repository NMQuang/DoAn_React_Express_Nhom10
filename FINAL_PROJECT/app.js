var createError = require('http-errors');
var express = require('express');
var exphbs = require('express-handlebars');
var exphbs_section = require('express-handlebars-sections');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var accountRouter = require('./routes/account');
var brandRouter = require('./routes/brand');
var productRouter = require('./routes/product');
var categoryRouter = require('./routes/category');
var orderRouter = require('./routes/order');
var userRouter = require('./routes/user');
var adminRouter = require('./routes/admin');
var homeRouter = require('./routes/home');
var customerRouter = require('./routes/customer');

//Order Router
var cartRouter = require('./routes/cart');

/* Client router*/
var dangKyRouter = require('./routes/_nguoi_dung');
var gioHangRouter = require('./routes/_gio_hang');
var sanPhamRouter = require('./routes/_san_pham');
var timkiemRouter = require('./routes/_tim_kiem');
var nhanHieuRouter = require('./routes/_nhan_hieu');

//middlewares
var handleLayout = require('./middlewares/handleLayout');

// var mongoDB = "mongodb://quyenphamkhac:dolongdao123@ds151180.mlab.com:51180/infinitydb";
var mongoDB = "mongodb://localhost:27017/InfinityDB";
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "Mongo Connection Error"));

var app = express();

// view engine setup
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: 'views/_layouts/',
    helpers: {
        section: exphbs_section(),
        number_format: n => {
            var nf = wnumb({
                thousand: ','
            });
            return nf.to(n);
        },
        ifCond: (v1, v2, options) => {
            if (v1 === v2) {
                return options.fn(this);
            }
            return options.inverse(this);
        }
    }
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));

//use middlewares
app.use(handleLayout);

//app router

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/admin', (req, res) => {
    res.redirect('/admin/login');
});

app.use('/home', homeRouter);
app.use('/admin', adminRouter);
// app.use('/account', accountRouter);
app.use('/brand', brandRouter);
app.use('/product', productRouter);
app.use('/category', categoryRouter);
app.use('/order', orderRouter);
app.use('/user', userRouter);
app.use('/cart', cartRouter);

//
app.use('/_nguoi_dung', dangKyRouter);
app.use('/_gio_hang', gioHangRouter);
app.use('/_san_pham', sanPhamRouter);
app.use('/_tim_kiem', timkiemRouter);
app.use('/_nhan_hieu', nhanHieuRouter);
app.use('/customer', customerRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

//hihihi

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;