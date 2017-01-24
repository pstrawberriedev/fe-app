var req = require.context("./", true, /^(.*\.(gif|png|jpe?g|svg$))[^.]*$/igm);
req.keys().forEach(function(key){
    req(key);
});
