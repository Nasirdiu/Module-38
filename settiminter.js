let secend=0;

const timeOut=setInterval(()=>{
    // secend++;
    //samne ++ dila 1 thake start hba ses a ++ dila 0 thake suru hba.
    console.log(secend++);
    if(secend>15){
        clearInterval(timeOut);
    }
},1000)