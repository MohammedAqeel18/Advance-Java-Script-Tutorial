//if statements

let customerIsBanned = false;
let viewer =""
let reply;
let Finance=false;

if (customerIsBanned){
    reply=`sorry`;
}
else if (viewer && Finance){
reply = `Enjoy ${viewer}and finance Cotent`;
}

else if (viewer){
    reply = `Enjoy $ {viewer}`;
}

else {
    reply= 'sorry iam still working';
}

console.log(viewer);