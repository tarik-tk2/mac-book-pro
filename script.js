//memory cost calculated
function costOfUpdatedmemory(isBaseMemory){
    let costOfExtraMemory = document.getElementById('extra-memory-cost').innerText;
    let costOfTotalMemory = document.getElementById('extra-memory-cost');
   
    
    if(isBaseMemory == '8gb'){
        costOfTotalMemory.innerText  = 0;
        

    }
    else if (isBaseMemory=='16gb'){
        costOfTotalMemory.innerText  = 180;
       

    }
    return costOfTotalMemory;
    
}
//storage cost calculated
function costOfUpdatedStorage(isStorage){
    let costOfExtraStorage = document.getElementById('extra-storage-cost').innerText;
    let costOfTotalStorage = document.getElementById('extra-storage-cost');
   
    if(isStorage == '256gb-storage'){
        costOfTotalStorage.innerText  = 0;

    }
    else if (isStorage=='512gb-storage'){
        costOfTotalStorage.innerText  = 100;
    }
    else if (isStorage=='1tb-storage'){
        costOfTotalStorage.innerText  = 180;
    }
    return costOfTotalStorage;
    
}
//delivery cost calculated

function updateDeliveryCost(isDeliveryCharge){
    let deliveryCost = document.getElementById('extra-delivery-cost').innerText;
    let costOfTotalDelivery = document.getElementById('extra-delivery-cost');
   
    if(isDeliveryCharge == 'without-charge' ){
        costOfTotalDelivery.innerText  = 0;

    }
    else if (isDeliveryCharge== 'with-charge' ){
        costOfTotalDelivery.innerText  = 20;
    }
    
    return costOfTotalDelivery;
    
}


//calculte total cost
function costCalculate(memory,storage,deliverycharge,code){

    let memoryCost= costOfUpdatedmemory(memory).innerText;
    const finalMemoryCost= parseInt(memoryCost);
    let storageCost= costOfUpdatedStorage(storage).innerText;
    const finalStorageCost= parseInt(storageCost);
    let deliveryCost= updateDeliveryCost(deliverycharge).innerText;
    const finaldeliveryCost= parseInt(deliveryCost);
    




    let currentBalance = document.getElementById('best-cost').innerText;
    let totalBalance = document.getElementById('total-cost');
    totalBalance.innerText= finalMemoryCost+finalStorageCost+finaldeliveryCost+parseInt(currentBalance);
    //show section total cost
    let displayCost = document.getElementById('display-cost');
     displayCost.innerText= totalBalance.innerText;

    //promo code calculation
     code= document.getElementById('promo-code').value;
     if(code=='stevekaku'){
         const reducingAmount = parseFloat(totalBalance.innerText)*.20;
         const afterPromoCost =totalBalance.innerText- parseFloat(reducingAmount);
        displayCost.innerText=afterPromoCost;
         
     }
     


}



//Update memory cost 
document.getElementById('16gb-memory').addEventListener('click',function(){
   
    costOfUpdatedmemory('16gb');

    costCalculate('16gb');
    

});
document.getElementById('8gb-memory').addEventListener('click',function(){
   
    costOfUpdatedmemory('8gb');
    costCalculate('8gb');


});

//update Storage Cost 
document.getElementById('256gb-ssd').addEventListener('click',function(){
   
    costOfUpdatedStorage('256gb-storage');
    costCalculate('256gb-storage');


});
document.getElementById('512gb-ssd').addEventListener('click',function(){
   
    costOfUpdatedStorage('512gb-storage');
    costCalculate('512gb-storage');


});
document.getElementById('1tb-ssd').addEventListener('click',function(){
   
    costOfUpdatedStorage('1tb-storage');
    costCalculate('1tb-storage');


});
//update delivery cost
document.getElementById('without-delivery-charge').addEventListener('click',function(){
   
    updateDeliveryCost('without-charge');
    costCalculate('without-charge');


});
document.getElementById('with-delivery-charge').addEventListener('click',function(){
   
    updateDeliveryCost('with-charge');
    costCalculate('with-charge');


});

document.getElementById('code-entered').addEventListener('click',function(){
  
   costCalculate('stevekaku');
   document.getElementById('promo-code').value = '';
});



