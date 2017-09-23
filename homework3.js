const gorcoxutyun=function(tiv1,tiv2,tiv3){
	const ardyunq=tiv1*(tiv3-tiv2);
	return ardyunq;
};
const check=function(number)
{
	if(!!number)
		console.log("The number isn't 0");
	else console.log("The number is 0");
}
const add=function()
{
	return 1;
}
const fullName=function(name,surname){return name+" "+ surname;};

const longestString=function(firstString,secondString,thirthString)
{
	const flength=firstString.length;
	const slength=secondString.length;
	const tlength=thirthString.length;
	if(flength>slength)
	{
		if(flength>tlength)
			return firstString;
		else
			return thirthString;
	}
	else if(slength>tlength)
		return secondString;
	else return thirthString;
}

const twonumbers=function(num1,num2)
{
	if(num1===num2)
		return 0;
	else if(num1>num2)
		return 1;
	else return -1;
};
const firsttruthy=function(fvalue,svalue,tvalue)
{
	return fvalue || svalue || tvalue;
};

const number1=5;
const number2=6;
const number3=7;
const result=gorcoxutyun(number1,number2,number3);
const nameOfTheBoy="Rouben";
const surnameOfTheBoy="Papikyan";
console.log(fullName(nameOfTheBoy,surnameOfTheBoy));
const firstWord="Afternoon";
const secondWord="Good Morning";
const thirthWord="Good Night";
console.log(longestString(firstWord,secondWord,thirthWord));
console.log(firsttruthy(0,8,NaN));
console.log(7+add());
check(4);
check(0);
