// document.write('<script src="lib/jquery-2.2.js" type="text/javascript" charset="utf-8"></script>');

function createRequestObj(param) {
    var req = new Object;
    req.url = param.url;
    req.data = param.data;
    req.onSuccess = param.onSuccess;
    req.onError = param.onError;
    req.async = param.async === undefined ? true : param.async;

    req.send = function() {
        var token = window.localStorage.getItem("token");
        
        $.ajax({
            async: req.async,
            url: 'http://localhost:8080' + req.url,
            type: 'post',
            data:  JSON.stringify(req.data),
            dataType: "json",
            contentType: "application/json",
            headers: {
                'token': token
            },
            success: function (data) {
                if (data.code == 0){
                    if (req.onSuccess == null) {
                        alert(data.msg);
                    } else {
                        req.onSuccess(data);
                    }
                } else {
                    if (req.onError == null) {
                        alert(data.msg);
                    } else {
                        req.onError(data);
                    }
                }
            },
            error: function (data) {
                if (data.status == 401) {
                    window.location.href = "login.html";
                } else if (data.status == 403) {
                    window.location.href = "#/403";
                } else if (data.status == 404) {
                    window.location.href = "#/404";
                } else if (req.onError == null) {
                    alert("网络开小差了，请稍后再试~");
                } else {
                    req.onError(data);
                }
            }
        })
    }
    return req;
}



var parseParam=function(param, key){
    var paramStr="";
    if(param instanceof String||param instanceof Number||param instanceof Boolean){
    paramStr+="&"+key+"="+encodeURIComponent(param);
    }else{
    $.each(param,function(i){
    var k=key==null?i:key+(param instanceof Array?"["+i+"]":"."+i);
    paramStr+='&'+parseParam(this, k);
    });
    }
    
    return paramStr.substr(1);
    };


