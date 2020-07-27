var  ourArray=[34,30,10];
var  myData=ourArray[2];
console.log(myData);

function sayHello (){

}
let car='toyata';
var cat= 'micah';
const pi=3.142;
console.log(car);
let firstName='karimi',lastName='paula';
let interestRate=24.90;
let studentLaon=50000;
let time=4;
let totalAmount=interestRate*studentLaon*time;
console.log(totalAmount);
let student={
name:'kristina',
course: 'appliesstatisticswithprogramming',
year :'y2s2',
school:'spas',
department:'mathematicsacturailscience'
};
console.log(student);
student.name='spencerhastings;'
const x=23;

console.log(x);
//object//

/*object  they are collection of various things or components.
the difffernt btw object and arryas is that objects uses curly braces 
while arrays uses square bracets.*/
 let jose={
     thieve:'paula',
     pastor:'janet'
 };
console.log(jose);
var w=16+ 4+'christine';
console.log(w);
//javascript arrays//
let marks=[23, 56,78,23,56,89];
//how to know their indexing
console.log(marks);
console.log(marks[2]);
// NB object got both properities and their values//
// one can use type of operator to find the type of varible that is used according to the js//
/*js  fuctions 
fuctions are block of code designed to perform a certain fuction
it is executed when something invokes that fuctions.*/
let p1=2;
let p2=3;
function data( p1,p2){
    return p1*p2
}
console.log(data);
var p=mypet(20,4)
function mypet(a,b){
    return a*b;
}
console.log(p);
//convert fahrenhert to celsius//
var todegee=23;
function todegree(source){
    return(5/9)*(source-32);
}
console.log(todegree);
let dream={
    color:'blue',
    number:6,
    type:'subaru'
}
console.log(dream);
console.log(dream['color']);
function carname(){
    var carname='subaru'// this is the local varible since it is declared inside the fuction.//
}
console.log(carname);
var cart="toyata";
function myfuction (){
    console.log(myfuction);
}
var favour="christine";
var sln=favour.length;
console.log(sln);
var full="karimichristine";
var details=full.length;
console.log(details);
//use of escape charaters//
var string="please i need to see myself 'progress' by utimate effort";
var pos=string.indexOf("i");
console.log(pos);
var pie = 'can everyone see this';
var see=pie.search('can');
console.log(see);
// extracting part of the string.//
var die ="apple,bananas,kiwi";
var date=die.slice(7)
console.log(date);
var done=" i would love to visit porland";
var n=done.replace('porland','cananda');
console.log(n);
var fine="Every apect of life requites real effort indore to make something vital or good out of one lives";
var sp =fine.replace('make','bulid');
console.log(sp);
var turn="this will go as planned";
var gg=turn.toLocaleUpperCase()
console.log(gg);
var tim="the sky looks upon those who belivethey can really achievewhat they truely believe";
var johh="believeing it is not enough it requires utimimate sacrife";
var us=tim.concat("",johh);
console.log(us);
var fifa="covid is havesting lots of lives";
var dad=fifa.charAt(6) ;
console.log(dad);
var dess='christine';
var fat=dess.split("");
console.log(fat);
var p =0.78789;
p.toFixed(2);
console.log(p);
var c=0.145;
var d=c.toPrecision(2);
console.log(d);
var numbers = 23;
var y=numbers.MAX_VALUE;
console.log(y);

var coz =Math.pow(8,2)
console.log(coz);
var dot=Math.sqrt(125);
console.log(dot);
var  tamb=Math.PI;
console.log(tamb);
var baby =Math.LN10;
console.log(baby);
function sayhi(){
    for(var i=0;i<5;i++ ){
        console.log(i);
    }
}
const square=function(){
    return number*number;
}
const hen=number=> number*number;
console.log(hen (5));


var py="chrisrine";
var call=py.split("");
console.log(call);
var tess=Math.floor (Math.random()*11);
console.log(tess);
function getRndinteger(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
    console.log(getRndinteger);
}
var w=new Date();
console.log(w);
;
var cow=['johh','paula','jack'];
"use strict";
let pup=34.89;
console.log(pup);
price=1290;
tax= 234,78,78;
fullPrice=(price+tax);
console.log(fullPrice);
var cc=35;
var priences={
    kenya :"arial",
    uganda: "hasting",
    cananda :"hannah"
}
console.log(priences);
var dudes= new Object();
dudes.kemu="micah";
dudes.mut="alex";
dudes.must="patrick";
console.log(dudes);
function teen( best, average,  poor){
    this.best="christina";
    this.average="hasting";
    this.poor="aria";
}
var beststudent=new teen("caira","pat","dest");
var averagestudent=new teen("weddy","leah","janis");
console.log(teen);
var salt={
    nairobi:"christine",
    meru:"doss",
    nakuru:"anita"
};
console.log(salt);
console.log(salt.nairobi);
var cake= salt.nairobi  +  "  "  +   salt.nakuru   +  "    " +  salt.meru;
console.log(cake);
var dummy={
    protein:"egg",
    starch:"ugali",
    vitamin:"apple"
};
for (r in dummy){
    Text+=dummy[r];
}
    console.log(r);
dummy.supplements="tablelets";
console.log(dummy);
delete dummy.supplements;
var todo="what the heck";
var dish=todo.toUpperCase();
console.log(dish);
var canvas=document.createElement('canvas');
canvas.width=500;
canvas.height=250;
var cxt=canvas.getContext("2d")
cxt.font='30px cursive';
cxt.fillText('I am having the time of my life',50,50);
document.body.appendChild(canvas)
console.log('%s has %d points', 'Sam', 100);
function dead(first,last,age,eyecolor){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eyecolor=eyecolor;

}
dead.prototype.nation ='kenya';
console.log(dead);
var myfather= new dead('johh','doe','50','blue');
var mymother=new dead('sally','rally','48','green');
mymother.nationality='English';
mymother.bestsong='tequire';
console.log(mymother);
var a=67;
var b=34;
/*appending an array using push fuction*/
var lil=["dog","cat","kitten"];
 var peper=lil.push(["puppy","cow","wolve","calve"]);
 console.log(peper);
 /*it is dump fine to create an array with the same format as for the fuction*/
 var teddy=[
     "school",
     "coding is so cooler than i thought",
     "grades",
     "position"
 ];
 document.getElementById("demo").innerHTML=teddy[1];
 var rio=teddy.length;
 console.log(rio);
 var pesa=teddy.sort();
 console.log(pesa);
 /*looping through the arrays.
 The best methods of looping is by using for loopinng in the arrays*/
 var fruits,text ,mkt,i;
 fruits=["bananas","oranges","apples","mangos"];
 mkt=fruits.push("lemon");
 console.log(mkt);
 /*adding any array using push method*/
 /*recursionis when a fuction calls it self*/
 function pow(x,n){
     if(n==1){
         return x;
     }
     else{
         return x* pow(x,n-1);
     }
 }
 console.log(pow(2,100));
 function leg(w,y){
     return w/y;

 }
 console.log(leg(12,3));
 function add(var1,var2){
     return var1+var2;

 }
 console.log(add(24,5));
 /*another way of declaring a fuction*/
 var squared=function(number){
     return number*number
 }
 console.log(squared(14));
 console.log(document.body);
 console.log(document.images);
 paragraph=document.getElementsByTagName(p);
 console.log(paragraph);
/* learning all about fuctions*/
function lot (r,p) {
    return r*p
}
console.log(lot(17,17));
/*another way of  writing a varible which is the modern way which is called afuction expression*/
var wins=function (w){
    return w*w
}
console.log(wins(9));/*a fuction is  of use if it is called uponed*/
var dance=4*wins(3);
console.log(dance);
/*developing fuctions that is advanced fuctions that self invoking fuctions*/
 var ren=(function(a,b){
     return a*b
})(2,8);

console.log(ren) ;
/*creating of self invoking fuctions*/
let pip=(function(f){
    return f*f
})(6)
console.log(pip);
/* reading  Ecmascipt which is now reffered to as javascipt*/
var mystring='some  tab  spaces of the most renowned author       ' ;
console.log(mystring.length);/* it is used to check the number of the character in the varible*/
var mynewstring=mystring.trim();//trim it is used to remove whitesspaces from both end of the string
console.log(mynewstring);
console .log(mynewstring.length);  
console.log(Array.isArray([12,78,56,34]));//ARRAY.isArray is used to check whether it is array
//it does work on not array like object
// some methods of the arrays//
var somemethods=[1].every(function(value,valueIndex,wholeArray){
    return value >=2;
});
console.log(somemethods);
var someduty=[12,78,90].some(function(value){//[.some method is used  to testing arrays]
    return value >=2;
});
console.log(someduty);
var mydot=[1,2,34,,56];
fitredarray=mydot.filter(function(value,valueIndex,wholeArray){
    return value>=5;
});
console.log(fitredarray);//filter returns the arrays which were able to pass
var doll=[23,78,90,56]
var dollhouse=doll.filter(function(value){
    return value<=50
});
console.log(dollhouse);
var kit=["pat","eddy","vicky"];
var kittendoll=kit.filter(function(valiue){
    return value=kit.length=1
});
console.log(kittendoll);
var vacc=["mim","rose","eliza"];
console.log(vacc.length);//length in arrays is used to count the number of arrays in agiven varible.
var each=["dog","cat","mouse"].forEach(function(value,valueIndex,wholeArray){
    console.log('value = '+ value + 'valueIdex  =' +  valueIndex + 'wholeArray='+ wholeArray);
})//for each exucutes  aprovided fuction for each  value in the arrays
console.log(["dog","mouse","cat","cat"].indexOf("cat"));/*index of searches for an array for the first value matching
the value value first of the array that as been reapeted*/
console.log(["dog","pupy","dog","cat","dog"].lastIndexOf("dog"));
var mask=[23,78,90,45];
var bluemask=mask.map(function(value){
    return value +10;
});
console.log(bluemask);//.map  enables execution  aprovide fuction  for each value in the array
var deli=[23,78,90,45]
var detdeli=deli.map(function(value){
    return value /2
});
console.log(detdeli);
var reducedmethod=[29,7,9,5,6].reduce(function(accumulator,value){
    return accumulator + value;// this is the first iteration
    
},10);//this is the second ileration
console.log(reducedmethod);//executes the fuction from left of the array 
var daddy=[23,78,56];
var paps=daddy.reduceRight(function(accumulator,value){
    return accumulator+value;

},-10);
console.log(paps);
var obj={
    get runwhenaccessed(){
        console.log('things seem to compilicated until you understand concept behind ')
    },
    set runswhenset(newvaluebeingset){
        console.log('it is wise to learn the basics first:'+newvaluebeingset);
    }
}
obj.runwhenaccessed;
obj.runswhenset='foo'
var ball={
    get ballroom(){
        console.log(' i know it hard but i will pull through  because i just know')
    },
    set fallout(why){
        console.log('because piece by piece matters:' + why);
    }
}
//to inkove the oject you don't need use of ()
//you do that by just acessing the property
ball.ballroom
ball.fallout='lesson learnt'
var bit={
    firstName:'',
    lastName:'',
    get name(){
        return this.firstName + ''+  this.lastName ;

    },
    set name(str){
        var n= str.split(/\s+/);
        this.firstName=n.shift();
        this.lastName=n.join('');
    }
}
bit.name=' Alex peterson';//setting the name
console.log(bit.name);  

/*studing about object statics methods*/
var peep={
    foo:'bar',
    cake:"delious",
    
    getcake:function(){
        console.log(this.cake);//setting the object to be used as the prototypes.
    }
}
console.log(peep);
var dod=Object.create(peep);//creating a new prototypes and setting the prototypes of peep to this new object

console.log(dod);

dod.getcake();
console.log(Object.getPrototypeOf (dod)===peep);
//creating a object with both property and the value
const  myobject={
    prop1:'value'
}
console.log(Object.getOwnPropertyDescriptor(myobject,'prop1'));/*geting the default describes of
the prop1 property.*/
let win={
    cab:"uber"
}
console.log(Object.getOwnPropertyDescriptor(win,'cab'));
//adding another property using object.defineproperty()
Object.defineProperty(win,'vehicles',{
value:'vehicles' ,
writable:'true ',
enumerable:'true' ,
configurable:'true' ,

});
//getting the desciptorsof vehicles//
console.log(Object.getOwnPropertyDescriptor(win,'vehicles'));
//adding more properties using object.getdefinepropeties
Object.defineProperties(win,{
    duck:{
        enumerable:'true',
        configurable:'true'
    },//one property added
    hen:{
        enumerable:'true',
        configurable:'true',//second property added
        set:(newvalue)=>{
            console.log('set the propery of duck to:' + newvalue)
        }
    },
get:()=>{
    console.log('you accessed the propert of duck')
    return 'hen'
}
});
//getting the descripots for prop3 and prop4
console.log(Object.getOwnPropertyDescriptor(win,'duck'));
console.log(Object.getOwnPropertyDescriptor(win,'hen'));
console.log(win.hen);
//creating an object without prototypes to use
var deadend= Object.create(null)//no prototypes used.
//add prop to the created object.
deadend.deadendprop1=1;
//defining a property  using a  defineproperty()
Object.defineProperty(deadend,'deadendprop1',{
    enumerable:false,
    value:2
});
console.log(Object.keys(deadend));//get the array of all non enumurated props
console.log(Object.getOwnPropertyNames(deadend));
window.name="michaelson";//decreared in the global varible
var myego={name:'katana'};
var dom=function(){
    console.log(this!== undefined && this!==window? this.name:window.name);

};
dom();
var davi=dom.bind(myego);
davi();
var json=JSON.parse('{"name":"adria","age":20}');//converting json string into js values
console.log(typeof json);
console.log(json.name,json.age);
var bee=JSON.stringify({name:"paula",age:12});// convert js  object into json
console.log(typeof bee);
console.log(bee);
// it is okay to use keywords as the pros of the objects
var dents={
    class:'appilied stati',
    new:'groossy',
    if:'tyrous',
    function:'classrep'
};
console.log(dents);  
//looking at number static methods
console.log(Number .isInteger(0)) ;   /*isInteger method returns true if the value passed
passed to it it is an interger otherwise it returns false*/
console.log(Number. isInteger(0.9898)) ;
console.log(Number.isInteger(Infinity)) ;
console.log(Number.isInteger(23.90)) ;
//looking at the string methods/
console.log('per-found'.startsWith('per-'));
console.log('tina'.endsWith('na'));//return a bollean expression 
console.log('pre-funded'.includes('fund'));/*.includes is used to check if the string contain
a certain sub-string*/
console.log("christine".includes('isti'));//it shows even the tinist connection
console.log('am in love with codes :'.repeat(3)); //.repeat returns a string  anumber of time
console.log("go!".padStart(10));
console.log("go!".padStart(5));
console.log('go!'.padStart(8));/* padding Start is used to provide the total number of length of
a string  from the start including the breaking  spaces*/
console.log("go!".padEnd(10));
console.log("go!".padEnd(5));
console.log('     i love the gay sky was said by Natela Abashiwili      '.trimStart());/*trim is
used to remove extra white spaces.
one can specify where to remove white spaces using left or right trim method*/
// new arrays statics methods
const mydots=Array.from({length:2,0: 'zero',1:'one'});
console.log(mydots);//Array.fromconvert theminto array values
const peer=Array.from('christine');
console.log(peer);/*Array.from used to convert a word into an array in 
other words fro astring to iterable*/
const peer1=Array.from(' christine loves coding');
console.log(peer1);
const peer2=Array.from([23,78,90]);
console.log(peer2);
//can create an fuction using array.from
const peer4=Array.from([2,7,9],item=> item *item);
console.log(peer4); //a way of creating a fuction from a new array method
let peer5= Array.from([23,89,56],item=>item+item);
console.log(peer5);//it is much possible to create a fuction 
//array.of  create array from the agruments
console.log(Array.of(5,{},undefined,[],'string'));
console.log(Array.of(5,4,6,7,89));//creating array from the argurment using array of
//.findIndex for arrays
let cake1=[1,4,6,7,8, 6,9];
console.log(cake1.find (function(item){return item >6}));
console.log(cake1.findIndex(function(item){return item > 6}));
console.log(cake1.findIndex[4]);
console.log(cake1.includes(5));//use to check whether a certain  number is in a array.
let cake2=["car","van","mercedes","cart"];
console.log(cake2.keys().toString());
let cake3= cake2.keys();//creating an itelator containing keys
/*an itelator is something with the next() method. it keep track of what comes next

console.log(cake3.next().value);
console.log(cake3.next().value);
let cake4=cake2.values();//creating an itelator containing values
console.log(cake4.next().value);
console.log(cake4.next().value);
/*itelable is  avalue that comes with an interface for iterating over a value
Methods such as keys(),.value(),.entries their sole purpose is to create ilerator that 
keeps track of  what next itelarion and how to get it*/
let book=[1,2,3,56,8,12,5];
console.log(book.copyWithin(0,4,6));
let book1=[23,89,67,45,34];
console.log(book1.copyWithin(0,2,3));
console.log(book1);
console.log(book1.copyWithin(-1,-3));//copywithin is used to copy and repalce back into the array
//negative sign mean starting to copy rom the end.
console.log([2,45,67,89].fill('foo',0,3));
let pati=['joyce',';kenna','paulina','bundi'];
console.log(pati.fill('students',0,1 ));/*.fill method is used to to replace or fill a range of 
of item in an array*/
let pati1=['md','christine','programming hub','it achievable'];
console.log(pati1.fill('i got this with GOd',0,1))/*the last value represent the number 
of times the specified item is to replaced*/
//new statics methods of objects
const pen={};
console.log(Object.is(pen,pen));/*accept  two value if they are same returns true
Object .is method is used to compare two objects*/
//comparing primative values
const mynumber=5;
const myboolean=true;
const mystrings="i love what i do"
const mynull=null;
const unde=undefined;
console.log(Object.is(mynumber,5));
console.log(Object.is(mystrings,"i love what i do"));
var pet={0:"christine",1:'det',2:'jade'};
console.log(Object.values(pet));//returns an  array of enurable property
console.log(Object.entries(pet));//object.entries  return  an array with both prop and value
var lean='karimi';
console.log(lean.split(''));
console.log(Object.values('foo'));
var dear='fireworks';
console.log(Object.values(dear));
var dear2={county:'meru',location:'mikumbune',village:'kaunjugi'};
console.log(Object .entries(dear2));/*object.entries convert an object int an array with both 
property and values*/
const bee1={'key1':'value1','key2':'value2'};//an object
console.log(Object.assign({},bee1));
const bee2={'cook':'gof','waiter':'devi','chef':'paul'};
const bee3={'pen':'bick','call': 'mum'}
const bee4={'hen':'etable','Pig':'pen'};
//use Object.assign to merge the  different objects
console.log(Object.assign(bee2,bee3,bee4));
var tep={'cup':'kenpoly','rap':'misss'};
var tep1={'window':'glass','cupsine':'pie','door':'metal'};
var tep2={'xasa':'language','web':'html'};
console.log(Object.assign(tep,tep1,tep2));
//using let and const to decrale varibles which  honour all kind of the blocks
if(true){
let doug=45;
const math_constant=Math.PI;
var jill=44;
console.log(doug)
}
console.log(jill);//it logs out inthe console because it spill out of the {}
;
try{

    console.log(dug);
    console.log(math_constant);
}catch(e){
    console.log('cannot find out the doug and the constant');
} ;      
const pull=function(x=2,y=4){
    return x+y;
};
console.log(pull());
pull()//calling a fuction.
let pull2=function (v=4){
   
    return v*v//when dealing with fuction 
};
console.log(pull2());
let rat=function( po=45,lo=45,zee=23){
    return po+lo*zee;
};
console.log(rat());
//desturing is the process of unpacking the elements from the string or an array
//desturing an  string
let [mi,bi,ca]="pee";
console.log(mi);
console.log(bi);
console.log(ca);
//destucturing of the array
let [one ,two ,threee]=['christine','alecki','hasting'];
console.log(one);
//descturing a object
let { first:f,last:ty} ={first:'donald',last:'may'};
console.log(f);
console.log(ty);//when destucturing  object we first allocate the properrties
let {shop:nkubu,mall:meruz}={shop:'keep striving',mall:'do it honi'};
console .log(nkubu);
console.log(meruz)//in descuring the object the prop on both sides are same
let {kin,relative}={kin:'joseph',relative:'mukurias'};
console.log(kin);
console.log(relative);//in object unpacking the most i=vital is that the prop should be same
//notice when destucturing array and string we  place 
let de= function ([one,four, five]){
    console.log(one,four,five);
};
//one of the common method for destucuring  fuction is 
let pets=function({bbabies:kitte,son:nesh}){
    console.log(kitte,nesh)
}
//desturucting the object 
let [seven, ten]=['kensiten','agi'];//this is desturing the arrays
console.log(ten);
let {johha ,toasta}={johha:'the monsta',toasta:'what can save human race'};//descuring objects

console.log(toasta);
//destucturing of the parameter in many times got the fallback
const[jade='twin',pool='jacki',doors='footstep']=[undefined,44,undefined];
console.log(jade);
console.log(pool);/*what the hecki is this defaut value. it kicks in when the value being 
destucuring is undefined .BUt the question is how is pool parameter undefined?*/
console.log(doors);
//fallback value in objects
let{kiri:name='dau', madi:court='tina',jessi:peo='soap'}={kiri:'front end developer'};
console.log(name);
console.log(court);
//looping for 09/5/2020
for(var i=0;i<100;i++){
    console.log(i);
};
for (var p=24;p<26;p++){
    console.log(p);
};
var specks=['a','b','c'];
for(var i=0;i<specks.length;i++){
    console.log(specks[i]);//used to cache the lenght of any array.
}
var booby=[12,89,56,34];
for(var i=0;i<booby.length;i++){
    console.log(booby[i]);
};
//for used in changing the increment
 for (var i =0 ;i<20;i+=2){
     console.log(i);
 };
//for loop for decrement
for(var i=30;i>=0;i--){
   console.log(i)
};
const itelable=['jane','mark','winne'];
for(let i of itelable){
    console.log(i);
}
//for  of will treat astring like unicode characters
const strings= "this is cooooooooooool";
for(let conlend of strings){
    console.log(conlend);
};
//for of works on set objects .a set object usually eliminates duplicates.
const names=['cate','edwin','jacki','micah','cate','cate'];
const uniquenames=new Set(names);
for (let names of uniquenames){
    console.log(names);
}
//using for of in map 
const map= new Map()
     .set('abc',1)
     .set ('def',2)
     for (const[key,value] of map){
         console.log(key +'is mapped to'+value)
     };
     const exact= new Map()
     .set ('miami',' bussiness school of havard')
     .set('miss nkoroi','bussiness school of calofinia')
     for( const[key ,value] of exact){
         console.log(key + ' is going to study at ' +  value);
     };
     // using for of  in objects
     const someobject={decision:'keep on moving always to achieve it coz i totaly belive in you'};
     for (let  key of Object.keys(someobject)){
         console.log(key + ":" + someobject[key]);
     }
     let vague={call:'developer line of duty'};
         for(let key of Object.keys(vague)){
             console.log( key +':' + vague[key]);
         };
         var object={"a":"foo","b":"bar","c":"baz"};
         Object.defineProperty(object,'c',{//checking the prototypes props
             enumerable:false,//saying that object c is  not enumerable so it cannot be dispayed.

         });
         for (var key in object){
             console.log('object .' +  key + ','  + object [key]);
         
         }
         //reading about the while loop
       
      var pre={college:"mut",house:"swim"};
      console.log(pre);   

    
         

    

























