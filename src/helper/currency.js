  
  export const getCurrency = (
    amount=0, 
    currency='PHP',
    removeCurrent=false,
    decimalCount=2,
    decimal=".",
    thousands=","
) => {
    try{
        decimalCount=Math.abs(decimalCount);
        decimalCount=isNaN(decimalCount)?2:decimalCount;
        const negativeSign=amount<0?'-':'';
       // const value = new Number(amount).toLocaleString('en-US', { style: 'currency', currency })
       // const floatString = value?.replace(/\D+/,'')
        let i=parseInt(amount=Math.abs(Number(amount)||0).toFixed(decimalCount)).toString();
        let j=(i.length>3)?i.length%3:0
    if(removeCurrent){
      
       
      return negativeSign+(j?i.substring(0,j)+thousands:'')+i.substring(j).replace(/(\d{3})(?=\d)/g,"$1"+thousands)+(decimalCount?decimal+Math.abs(amount-i).toFixed(decimalCount).slice(2):"");

    }
    else{
        return `${negativeSign}₱${(j?i.substring(0,j)+thousands:'')+i.substring(j).replace(/(\d{3})(?=\d)/g,"$1"+thousands)+(decimalCount?decimal+Math.abs(amount-i).toFixed(decimalCount).slice(2):"")}`
    }
    /*else if(currency.toUpperCase()==="PHP" && Platform.OS !== "web"){
        return `₱${floatString}`
    }
    else{
        return value
    }*/
}
catch(e){
console.log(e);
}

}
