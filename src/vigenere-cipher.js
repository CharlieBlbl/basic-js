class VigenereCipheringMachine {
    constructor(value){
        this.value = value
    }
    encrypt(message, key) {
        if (!message || !key){ throw new Error}
        message = message.toUpperCase()
        key = key.toUpperCase()
        
        let res = ''
        let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let n = alpha.length

        for (let i = 0, j = 0; i < message.length; i++, j++){
            if(alpha.indexOf(message[i] !== -1)){
                let m = alpha.indexOf(message[i])
                let k = alpha.indexOf(key.charAt(j % key.length))
                res +=  alpha [(m + k) % n]
            } else {
                j =j-1
                res += message[i]
            }
        }
        if (this.value === false) {return res.split('').reverse().join('')} 
        else {
            return res
        }
    }

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key){ throw new Error}
        message = message.toUpperCase()
        key = key.toUpperCase()
       
        let res = ''
        let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let n = alpha.length

        for (let i = 0, j = 0; i < message.length; i++, j++) {
            if (alpha.indexOf(message[i] !== -1)) {
                let c = alpha.indexOf(message[i])
                let k = alpha.indexOf(key.charAt(j % key.length))                
                res += alpha[(c + n - k) % n];
            } else {
                k = k - 1;
                result += message[i];
            }
        }


        if (this.value === false) {return res.split('').reverse().join('')} 
        else {
            return res
        }
    }
}

module.exports = VigenereCipheringMachine;
