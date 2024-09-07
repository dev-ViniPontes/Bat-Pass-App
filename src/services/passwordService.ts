export default function GeneratePass() {
    let password : string = '';
    let characters : string = '!@#$%¨&*()_+649382175qaz}{wsxedcrfvt`"g*-/bYHNUJMIK<OL>' 
    let passwordLength : number = 16

    for (let index = 0; index < passwordLength; index++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }
    
 return password
}