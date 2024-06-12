{
    let num1= 7;
let num2= 4;
let num3= num1 + num2;
console.log("let: ",num3/2);
if (num3/2>=6 )console.log("aprovado");
else console.log("rejeitado");
}  
{
let a="teste";
console.log("let:",a);
}
{
    console.log('ola'+' mundo');
}
{
    let a= 6;
    a=a*a;
    console.log(a);
}
let usuario='';
process.stdin.on('data', function(data){
usuario=data.toString();

console.log("Meu nome é  ",usuario);
});

console.log(10/0);
