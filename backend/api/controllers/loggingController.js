/**
 * Created by Douglas on 31.05.2017.
 */
module.exports = {

    info: function(message){
        print('INFO', message);
    },

    warning: function(message){
        print('WARNING', message);
    },

    error: function(message){
        print('ERROR', message);
    }
};

function print(level, message){
    var date = new Date();
    console.log(date.toUTCString() + '  ' + level + ':  ' + message);
};