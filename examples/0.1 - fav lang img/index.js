console.log("Running a node js file in container");
var i = 0;
while(true) {
    if(new Date().getMilliseconds() === 0)
    console.log("Listening", ++i);
}