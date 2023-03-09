



export function getAmount(fromData, toLabel, res ){
    let amount=null;
    if(!res) return;

    const fromItem = res.find(item => item.cc === fromData.label);
    const toItem = res.find(item => item.cc === toLabel);

    if(fromData.label === 'UAH' && toLabel !== 'UAH') {
        
        amount = fromData.value/toItem.rate
    } else if(toLabel === 'UAH'){
        amount = fromData.value*fromItem?.rate
    } else {

        amount = fromData.value*fromItem?.rate/toItem?.rate
    }

    return amount.toFixed(2);
}