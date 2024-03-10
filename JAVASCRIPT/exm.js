// promises example:
function performcal(a,b){
    return new promise(function(resolve,reject){
        console.log(`&{a} & {a}`)
        setTimeout(function(){
            const result=a+b;
            if(result >= 0){
                console.log("Calculation a ", result);
                resolve(result)
            }else{
                reject("cal failed");
            }
        },2000)
    })
}
performance(5,5).then(function(result){
    console.log("promises is resolved")
}).catch(function(error){
    console.log("promise rejected,error")
})