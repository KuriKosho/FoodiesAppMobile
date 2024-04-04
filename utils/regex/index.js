export function isValidEmail(email) {
    if (!email) {
        return false;
    } 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}   
export function isValidUsername(username) {
    if (username && username.length >= 4) {
        return true; // Username is valid
    } else {
        return false; // Username is invalid
    }
    
}

export function isValidPassword(password) {
    if (password!=undefined) {
        if (password && password.length >=4){
            return true;
        } else {
            return false;
        }
    } 
    return false;
    
}
