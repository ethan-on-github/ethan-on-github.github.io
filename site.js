let userAgent = navigator.userAgent;
let docBody = document.body;
if(userAgent.match(/firefox|fxios/i))
{
    docBody.innerHTML = '<!DOCTYPE HTML><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Firefox</title></head><body><h1>FF</h1></body></html>';
}
else
{
    docBody.innerHTML = '<!DOCTYPE HTML><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Not FF</title></head><body><h1>Not FF</h1></body></html>';
}
