var mongoose=require('mongoose');

var dbURI = 'mongodb://abeeb:doyinabeeb@ds159180.mlab.com:59180/todo';

mongoose.Promise = global.Promise;

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

module.exports = mongoose;