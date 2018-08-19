var k= document.getElementById("click")
var t= document.getElementById("in");
var helper_1=document.getElementById("helper_1");
var helper_2=document.getElementById("helper_2");
var helper_3=document.getElementById("helper_3");
var tk=document.getElementById("tik");
var ball=document.getElementById("ui");
var a= document.getElementById("a");
var b= document.getElementById("b");
var c= document.getElementById("c");
var sec=0;
var tik=0;
var msg=false;
var video=false;
var bad = false;
var time_limit=0;
var count=0
var plus=0;
chrome.storage.local.get(['plus'], function(result) {
	
	console.log(result);
	if(result.plus>0){
		console.log("asd");
	plus=result.plus;}
});

 chrome.storage.local.get(['tutorial'], function(result) {
 
if(plus==0)
{plus=plus+1;
	console.log("all is well");
chrome.storage.local.set({plus:plus}, function(result){});

	helper_1.classList.add("help");
ui.classList.add("ui");

setTimeout(function(){
ui.classList.add("hide");
helper_1.classList.add("hide");

helper_2.classList.add("magic");
helper_3.classList.add("helperc");

tk.classList.add("tik");
tk.innerHTML="Enter time limit per day in minutes";
setTimeout(function(){
helper_2.classList.add("hide");
helper_3.classList.add("hide");
tk.classList.add("hide");
},4000);
},4000);


}



 });





k.addEventListener("click",function(){
	if(count==0){
	count=count+1;
	console.log("click send");
	time_limit=t.value;
chrome.runtime.sendMessage({time_limit:time_limit*60000}, function(response) {console.log("click and send");});
	
	 chrome.storage.local.set({time_limit:time_limit*60000,count:count}, function(result) {});
		t.value="";
		k.classList.add("gone");
		t.classList.add("disapper");
setTimeout(function(){
	k.classList.add("bae");	

},5000);
setTimeout(function(){
	console.log("jao");
	t.classList.add("v");
},2000);
}
});


 chrome.storage.local.get(['count'], function(result) {
 	if(result.count>0)
 	{	k.classList.add("bae");
 	t.classList.add("v");}
 });




  chrome.storage.local.get(['code','count'], function(result) {
  	console.log("get");
  	console.log(result);
        if(result.code>0){
	
	go();
        	 state.classList.add("a");
   	 state.classList.add("b");
        }
       });



   chrome.storage.local.get(['code1'], function(result) {
  	
        if(result.code1>0){	go1();
state2.classList.add("a");
state2.classList.add("b");

        }
        	     
         });


   chrome.storage.local.get(['code2'], function(result) {
  	
        if(result.code2>0){	  	state3.classList.add("a");
                  	state3.classList.add("b");
        go2();

        	     }
         });


chrome.storage.local.get(['code3'], function(result) {
  	
        if(result.code3>0){
        	console.log("garbar yaha han ");
        	go3();
state4.classList.add("a");
                  	state4.classList.add("b");

        	   }  
         });



chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log("received "+ request);
if(request.ck>0){
	 state.classList.add("a");
   	 state.classList.add("b");

}

  	console.log("time :" + request.time);
  	tik=request.time;
  	var second=((request.time)/1000)%60;
  	if((request.time)/1000>60&&(request.time)/1000<3600){
console.log(" clock 0  ");
  		var minute=Math.floor((request.time)/60000);
  	
  		
  		
  		if(second>9)
  			c.innerHTML=(second);
  		else
  		 c.innerHTML="0"+(second);
  		 b.innerHTML="0"+(minute);
  		}
      


        else{

          if(second>9)
  			c.innerHTML=(second);
  		else
  		 c.innerHTML="0"+(second);
}

 	if((request.time)/1000>3600){
 		console.log(" clock  ");
 		console.log(Math.floor((request.time)/3600000));
var hour=Math.floor((request.time)/3600000);
var minute= Math.floor((((request.time)/1000)%3600)/60);
var second=(((request.time)/1000)%3600)%60;
if(minute<9)
{
	b.innerHTML="0"+minute;
	if(second>9)
	c.innerHTML=second;
else
	c.innerHTML="0"+second;
	a.innerHTML=hour;
}

else
{
	b.innerHTML="0"+minute;
	if(second>9)
	c.innerHTML=second;
else
	c.innerHTML="0"+second;
	a.innerHTML=hour;

}


 	}

   });





   var check1= document.getElementById("i1");
   var check2= document.getElementById("i2");
   var check3= document.getElementById("i3");
   var check4= document.getElementById("i4");
     var state= document.getElementById("span2");
     var state2= document.getElementById("span3");
     var state3= document.getElementById("span4");
  var state4= document.getElementById("span1");


var click=0;
var click1=0;
var click2=0;
var click3=0;
var twi= document.getElementById("twi");


function go(){
  
	  state.classList.add("a");
   	 state.classList.add("b");
chrome.storage.local.set({a:"https://twitter.com/"}, function() {});
   	msg=!msg;
   	console.log("msg");
	if(msg)
	chrome.runtime.sendMessage({block:"https://twitter.com/"}, function(response) {});
else
	chrome.runtime.sendMessage({block:"https://twitter.com/"}, function(response) {});

   }

function go1(){
    	
   
    		click1=click1+1;

   	chrome.storage.local.set({b:"https://www.youtube.com"}, function() {});

  	  state2.classList.add("a");
   	 state2.classList.add("b");



		chrome.runtime.sendMessage({utube:"https://www.youtube.com/"}, function(response) {});
   }


function go2(){

	 
    	console.log("go2");
    		click2=click2+1;
    		chrome.storage.local.set({c:"https://www.pornhub.com",d:"https://www.xvideos.com",f:"https://www.xnxx.com",g:"https://www.youporn.com",h:"https://www.youjizz.com",i:"https://www.youporn.com"}, function() {});

  	  state3.classList.add("a");
   	 state3.classList.add("b")
		chrome.runtime.sendMessage({xx:"https://www.pornhub.com",ban:"https://www.xvideos.com",f:"https://www.xnxx.com",g:"https://www.youporn.com",h:"https://www.youjizz.com",i:"https://www.youporn.com"}, function(response) {});


   }

function go3(){

	
    	console.log("go3");
    		click3=click3+1;
    		chrome.storage.local.set({e:"https://www.facebook.com"}, function() {});

  	  state4.classList.add("a");
   	 state4.classList.add("b")
		chrome.runtime.sendMessage({x:"https://www.facebook.com"}, function(response) {});


   }


1


   check2.addEventListener("click",function(){
   	if(click==0){
   	click=click+1;

chrome.storage.local.set({code: click}, function() {
         console.log("saved");
        });

  	  state.classList.add("a");
   	 state.classList.add("b");

  chrome.runtime.sendMessage({block:"https://twitter.com/",remove:true,k:click}, function(response) {});

   }}
   );
   

    check3.addEventListener("click",function(){
    	if(click1==0){
    		click1=click1+1;
chrome.storage.local.set({code1: click1}, function() {
         console.log("saved");
        });

  	  state2.classList.add("a");
   	 state2.classList.add("b");



		chrome.runtime.sendMessage({utube:"https://www.youtube.com/",remove1:true,k:click}, function(response) {});
   }}
   );
   

    check4.addEventListener("click",function(){
    	if(click2==0){
    		click2=click2+1;
    		chrome.storage.local.set({code2: click2}, function() {
       
        });

  	  state3.classList.add("a");
   	 state3.classList.add("b");
		chrome.runtime.sendMessage({xx:"https://www.pornhub.com",ban:"https://www.xvideos.com",f:"https://www.xnxx.com",g:"https://www.youporn.com",h:"https://www.youjizz.com",i:"https://www.youporn.com"}, function(response) {});


   }}
   );


check1.addEventListener("click",function(){
    	if(click3==0){
    		click3=click3+1;
    		chrome.storage.local.set({code3: click3}, function() {
       
        });

  	  state4.classList.add("a");
   	 state4.classList.add("b")
		chrome.runtime.sendMessage({x:"https://www.facebook.com"}, function(response) {});


   }}
   );

   
if(click>0){


	console.log("hurray");
	 state.classList.add("a");
   	 state.classList.add("b");
}
 
   

