function r(){
	this.value=0;
}
var neon=new Date();
var new_date= String(neon);
var time=setTimeout(function(){console.log("print"),0});
var lmt=0;
chrome.storage.local.get(['time_limit'], function(result) {
	lmt=result.time_limit;
});


var histry="123ms";

 chrome.runtime.onInstalled.addListener(function() {
 	console.log("initialise");
 	var date= new Date();
 	var k= String(date);
 	console.log("on runtime date "+date);
 	chrome.storage.local.set({tarik:k,tutorial:true}, function() {});

   });

var result=0;
var i=0;

chrome.storage.local.get(['cross'], function(result) {
	console.log('cross');
	console.log(result);
	if(result.cross)
i=result.cross;


});

console.log(i);	

function mo(i){
	chrome.runtime.sendMessage({time:i}, function(response) {
		console.log("send");
		console.log(i);
 });

}

	
// check date change


chrome.storage.local.get(['tarik'], function(result) {
	console.log("tarik");
	console.log( result.tarik);
	console.log("t");
	console.log(new_date);
	if(result.tarik)
		console.log("kuch ha")
	else result.tarik="qWEARFGTHXCVGGN";
	if(new_date.substr(0,10)==result.tarik.substr(0,10))
console.log("match");
else{
	console.log("i=0");
	i=0;
}
});




//init



console.log("g");
console.log(i);


var click=0;

var match=["dvfhf","ffddf","xzcggf","fggf","ssd","fhd","gffgdgf","db","ghghd"];

var check=0;


function start(tabs){
 time =setTimeout(function(){

	console.log("gone from here "+lmt );
i=i+1000;

if(check==0)
	{
if(i<lmt){
start(tabs);
chrome.storage.local.set({cross:i}, function() {});
}

mo(i);

}
 if(i>=lmt){
 	console.log("tabs");
 	console.log(tabs);
 chrome.tabs.update(tabs[0].id, {url: "https://www.google.co.in/"});} },1000);}



//start1


function start1(tabs){
	var time =setTimeout(function(){

	console.log("gone from here "+lmt );
i=i+1000;

if(check==0)
	{
if(i<lmt){
start(tabs);
chrome.storage.local.set({cross:i}, function() {});
}

mo(i);

}
 if(i>=lmt){
 	console.log("tabs");
 	console.log(tabs);
 chrome.tabs.update(tabs[1].id, {url: "https://www.google.co.in/"});} },1000);}








chrome.tabs.onCreated.addListener(function(){
	console.log("new tab created");
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {

chrome.runtime.sendMessage({ck:click}, function(response) {
	
 });



console.log("ab update hua");
	chrome.tabs.query({'active': true}, function(tabs) {
	console.log("created tabs wala console log");
	console.log(tabs);
	if(tabs[1]){
	if(tabs[1].url.startsWith(match[4])||tabs[1].url.startsWith(match[0])||tabs[1].url.startsWith(match[1])||tabs[1].url.startsWith(match[2])
		||tabs[1].url.startsWith(match[3])||tabs[1].url.startsWith(match[4])||tabs[1].url.startsWith(match[5])||tabs[1].url.startsWith(match[6])||tabs[1].url.startsWith(match[7])||tabs[1].url.startsWith(match[8])){ 
check=0;
			start1(tabs); }
		else {check=1; 
			console.log("idhar");
console.log(i);
mo(i);}


	}	                    }); }   });




})


chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {

chrome.runtime.sendMessage({ck:click}, function(response) {
	
 });



console.log("ab update hua");
	chrome.tabs.query({'active': true}, function(tabs) {
		console.log("check karega ab");
			console.log(histry);
			if(tabs[0].url.startsWith(match[4])||tabs[0].url.startsWith(match[0])||tabs[0].url.startsWith(match[1])||tabs[0].url.startsWith(match[2])
		||tabs[0].url.startsWith(match[3])||tabs[0].url.startsWith(match[4])||tabs[0].url.startsWith(match[5])||tabs[0].url.startsWith(match[6])||tabs[0].url.startsWith(match[7])||tabs[0].url.startsWith(match[8]))
	{ console.log("clear interval"); clearInterval(time); }


	if(tabs[0].url.startsWith(match[4])||tabs[0].url.startsWith(match[0])||tabs[0].url.startsWith(match[1])||tabs[0].url.startsWith(match[2])
		||tabs[0].url.startsWith(match[3])||tabs[0].url.startsWith(match[4])||tabs[0].url.startsWith(match[5])||tabs[0].url.startsWith(match[6])||tabs[0].url.startsWith(match[7])||tabs[0].url.startsWith(match[8])){ 
check=0;   
if(tabs[0].url.startsWith(match[4]))
	histry=match[4];
	if(tabs[0].url.startsWith(match[0]))
	histry=match[0];
	if(tabs[0].url.startsWith(match[1]))
	histry=match[1];
	if(tabs[0].url.startsWith(match[2]))
		histry=match[2];
   if(tabs[0].url.startsWith(match[3]))
   histry=match[3];
if(tabs[0].url.startsWith(match[4]))
   histry=match[4];
if(tabs[0].url.startsWith(match[5]))
   histry=match[5];
if(tabs[0].url.startsWith(match[6]))
   histry=match[6];
if(tabs[0].url.startsWith(match[7]))
   histry=match[7];
if(tabs[0].url.startsWith(match[8]))
   histry=match[8];
   			start(tabs); }
		else {check=1; 
			console.log("idhar");
console.log(i);
mo(i);


	}	                    }); }   });


chrome.storage.local.get(['a','b','c','d','e','f','g','h','i'], function(request) {
	if(request.a)
  	match[0]=request.a;
  	if(request.b)
  	match[1]=request.b;
  if(request.c)
  	match[2]=request.c;
  if(request.d)
  	match[3]=request.d;
  if(request.e)
  	match[4]=request.e;
    if(request.f)
  	match[5]=request.f;
    if(request.g)
  	match[6]=request.g;
    if(request.h)
  	match[7]=request.h;
    if(request.i)
  	match[8]=request.i;
  console.log("request ..");
console.log(request);});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	if(request.block)
  	match[0]=request.block;
  	if(request.utube)
  	match[1]=request.utube;
  if(request.xx)
  	match[2]=request.xx;
  if(request.ban)
  	match[3]=request.ban;
    if(request.x)
  	match[4]=request.x;
   if(request.f)
  	match[5]=request.f;
   if(request.g)
  	match[6]=request.g;
   if(request.h)
  	match[7]=request.h;
   if(request.i)
  	match[8]=request.i;
 
 	console.log(" msg come  ");
  	  	console.log(match[7]);

  	lmt=request.time_limit;
chrome.storage.local.get(["time_limit"],function(result){
	console.log("time timr");
	console.log(result);
if(result.time_limit>0)
	lmt=result.time_limit;
});
click=request.k;
console.log(request) });


console.log(match[0]);

