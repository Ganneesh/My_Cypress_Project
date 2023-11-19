

function display(num)
{
    console.log(num)
}

function addition(a,b,callback)
{

    let c=a+b
    callback(c)

}

addition(10,20,display)