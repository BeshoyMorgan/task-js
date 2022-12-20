// console.log("task 1");
// var d= new Date();
// function display(){
//     return `<div><p>${d}</p>
//     </div>`;
// }
// document.write(display());





/////////////////////////task 4
console.log("task 4");
var regName=/^[a-z]{3,10}$/img;
var regPhone=/^[0-9]{8}$/;
var regMobile=/^(01)(1|2|5)[0-9]{8}$/;
var regEmail=/[a-z]+[a-zA-z0-9]{4,8}(@)(yahoo|gmail|outlook)(.com)$/;

var style="";

do{
var strname=prompt("enter your name ");
}while(!regName.test(strname))

do{
    var strPhone=prompt("enter your phone ");
    }while(!regPhone.test(strPhone))
    do{
        var strmobile=prompt("enter your mobile ");
        }while(!regMobile.test(strmobile))
        do{
            var strMail=prompt("enter your mail ");
            }while(!regEmail.test(strMail))
            var color=prompt("enter your favorite color red or green or blue");
            if(color==="red"){
                style="red";
            }
            else if(color ==="green"){
                style="green";
            }
            else if(color==="blue"){
                style="blue";
            }
            else{
                style="black";
                alert("wrong color");
            }
            function disp(){
                return `<div>
                <span style="color:${style};">welcome dear guest</span><span> ${strname}</span><br>
                <span style="color:${style};">your telephone number is</span><span> ${strPhone}</span><br>
                <span style="color:${style};">your mobile number is </span><span> ${strmobile}</span><br>
                <span style="color:${style};">your email address is </span><span> ${strMail}</span><br>
            </div>`;
            }
            function dispDate(){
                var d=new Date();
                return `<div>
                <span style="color:${style};">Today is</span><span> ${d.getDay()}</span><br>
                <span style="color:${style};">month is</span><span> ${d.getMonth()}</span><br>
                <span style="color:${style};">  year is </span><span> ${d.getFullYear()}</span><br>
                <span style="color:${style};">your email address is </span><span> ${d.toLocaleString()}</span><br>
            </div>`;
            }
document.write(disp());

document.write(dispDate());

// ////////////////////task 3
// console.log("task three");

// // var reg=/[1-9]+(2|4|6|8)$/;
//  var str=prompt("enter even number");
// // var reg=/[1-9]*(0|2|4|6|8)$/



// // if(reg.test(str)){
// //     console.log(true);
// // }
// // else
// // {
// //     console.log(false);
// // }



// //////////////////////////////////////task 5
// console.log("task 5.1");
// var arr=[
//     {
//     name:"besho",
//     degree:80,
// },
// {
//     name:"ali",
//     degree:70
// },
// {
//     name:"mohamed",
//     degree:95
// }
// ];
// var maxDeg=arr.find(function (ele){
//     return ele["degree"]>90;

// });
// console.log(maxDeg["degree"]);





// //////////////task 5.2
// console.log("task 5.2");
//  var arrDeg=arr.filter(function(ele){
//      return ele["degree"]>60;
//  });
//  for(var i in arrDeg){
//      console.log(arrDeg[i]["degree"]);
//  }



//  //////////////////task 5.3
//  console.log("task 5.3");
//  arr.push({
//      name:"bebo",
//      degree:50,
//  });
//  for(var i of arr){
//      console.log("name: "+i["name"]+"   //   degree:"+i["degree"]);
//   }
//   //////////////////////////////task 5.4
// console.log("task 5.4");
// arr.pop();
//  for (var i in arr){
//      console.log("name= "+arr[i]["name"]+"degree= "+arr[i]["degree"]);

//  }
// arr.sort(function(a,b){
    
//     return     (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0;

// });
// console.table(arr);
// ////////////////////////task 5.5
// console.log("task 5.5");
// arr.splice(2,0,{name:"shady",degree:20},{name:"meme",degree:50});
// console.table(arr);




// /////////////////////task 5.6
// console.log("task 5.6");
// arr.splice(3,1);
// console.table(arr);
// ////////////////
// var str1="nardeen";
// var str2="besho";
// var str3="ali";
// function x(){
//     return `<div><p>welcome`+str1 +`</p><br/>
//     <p>welcome `+str2+`</p><br>
//     </div>`;
// }
// document.write(x());



// var arr=[
//     {
//     name:"besho",
//     degree:50,
// },
// {
//     name:"ali",
//     degree:40
// },
// {
//     name:"mohamed",
//     degree:95
// }
// ];
// // var x=arr.find(function (e){
// //     return e["degree"]>90;
// // });
// // console.log("name= "+x["name"]+"// degree= "+x["degree"]);



// // console.log("new task");

// // var arrOffilter=arr.filter(function (e){
// //     console.log(e);
// //     return e["degree"]<60;

// // });
// // for(var i=0;i<arrOffilter.length;i++){
// //     console.log("name= "+arrOffilter[i]["name"]+"///degree= "+arrOffilter[i]["degree"]);
// // }
// // //console.log(i);
// // arr.push({
// //     name:"nardeen",
// //     degree:100,
// // });
// // console.log("for in //////////////");
// // for(let i in arr){
// //    // console.log(i);
// //     console.log("name= "+arr[i]["name"]+"////degree= "+arr[i]["degree"]);

// // }
// // console.log("for of //////////////");

// // arr.pop();
// // for(let i of arr){
// //     //console.log(i);
// //     console.log("name= "+i["name"]+"/////degree= "+i["degree"]);
// // }
// // var arr2=[1,4,2,7,5];
// // arr.sort(function(a,b){
// //     if(a["name"]>b["name"]){return 1}
// //     else if(b["name"]>a["name"]){return -1}
// //     else{return 0;}
// // });
// // console.table(arr);
// var arr2=[1,2,3,4,5];

// // arr2.splice(1,1);
// // for(let i=0;i<arr2.length;i++){
// //     console.log(i +"=>"+arr2[i])
// // }
// console.log("///////////////////////////////");
// // arr2.splice(1,2);
// // for(let i=0;i<arr2.length;i++){
// //     console.log(i +"=>"+arr2[i])
// // }

// // arr2.splice(3);
// // for(let i=0;i<arr2.length;i++){
// //     console.log(i +"=>"+arr2[i])
// // }
// //arr2.splice(2,2);
// // for(let i=0;i<arr2.length;i++){
// //     console.log(i +"=>"+arr2[i])
// // }
// arr2.splice(3,0,100);
// for(let i=0;i<arr2.length;i++){
//     console.log(i +"=>"+arr2[i])
// }
// arr.splice(2,0,{name:"bebo",degree:10},{name:"nardeen",degree:100});
// console.table(arr);
// /////////////////////////////////////////
// arr.splice(3,0,);