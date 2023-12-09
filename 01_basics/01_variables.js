const accountId = 144553
let accountEmail = "ashiverma@google.com"
var accountPassword = "12345"
accountCity = "jaipur"

let accountState;

// accountId = 2 not allowed
accountEmail = "cddcd@goole.com"
accountPassword = "sds"
accountCity = "delhi"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// prefer not to use var 
// because of issuse in block scope and functional scope
