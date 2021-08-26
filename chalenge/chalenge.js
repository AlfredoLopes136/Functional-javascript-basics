function CodelandUsernameValidation(str) {
    const regex = /^[a-zA-Z][a-zA-Z0-9_]*[^_]$/g
    if (str.length >= 4 && str.length <= 25 && regex.test(str)) {
      return true
    } else {
      return false
    }
    // code goes here  
  }
  
  const userName = CodelandUsernameValidation
  
  // keep this function call here 
  console.log(CodelandUsernameValidation(readline(abcd)))