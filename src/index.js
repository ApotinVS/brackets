module.exports = function check(str, bracketsConfig) {
	while(str){
        let flag = false
        for(const i of bracketsConfig) {
            let brackets = i[0] + i[1]
            if(str.includes(brackets)){
                str = str.replace(brackets, '')
                flag = true
            }
        }
        if(!flag)
            break;
    }
    return str == '' 
}
