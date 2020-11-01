

var obj = {};


function print(str) {
    console.log(str);
}

for(var i=0; i<5; ++i) {
    obj[i] = function() {
        print("num: " + i);
    }
}

console.log("-------")
for(var i=0; i<3; ++i) {
    
    obj[i]();
}

