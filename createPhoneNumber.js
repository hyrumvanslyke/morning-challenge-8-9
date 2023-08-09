function phoneNumber(n){
    let format = "(xxx) xxx-xxxx"
    for(let i =0; i < n.length;i++){
        format = format.replace('x', n[i])
    }
    return format
}
console.log(phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))