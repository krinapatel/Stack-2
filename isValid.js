// Time Complexity : O(n)
// Space Complexity : O(n)

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = [];
    //console.log(s.length);
    for(let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
       if(c === '(') stack.push(')');
       else if(c === '{') stack.push('}');
       else if(c === '[') stack.push(']');
       else if(stack.length === 0 || stack.pop() !== c) return false;
    }
    if(stack.length !== 0) return false;
    return true;
};