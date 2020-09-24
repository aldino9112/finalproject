function nominal(value){
    value = value.toString()
    if (value.length == 2) {
        return 'Rp '+value
    }
    let count = 0
    value = value.split('')
    const loop = value.length
    for (let i = 0; i < loop; i++) {
        if ( count+4 > loop ) {
            break
        }
        count += 4
        value.splice(value.length-(count-1),0,'.')
        
        
    }
    return 'Rp '+value.join('')
}

module.exports = nominal