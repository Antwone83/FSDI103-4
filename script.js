console.log("Script");
let x=0;

function counter(){
    x++;
    console.log(x);
    msg("in JS","message 2");
}

function msg(arg1,arg2){
    console.log("This is the message" + arg1);
    console.log("This is  " + arg2);

}

function total(price,qty){
    let subtotal=price*qty;
    return subtotal;
}

function taxesCalculation(product,subtotal){
    let total= subtotal*1.16;
    document.write(`<div>
        <p>Amazon Online Store</p>
        <p>San Diego, California </p>
        <p>555-555-5555</p>
        <br>
        <br>
        <p> Description         Qty         Price</p>
        <p> ${product}   </p>
        <p> sub------------ ${subtotal}</p>
        <p> total --------- ${total}</p>
    </div>`)
    return total;
}

taxesCalculation("Mac m1",total(1000,2));
taxesCalculation("Headset",total(500,3));