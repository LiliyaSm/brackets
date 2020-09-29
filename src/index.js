module.exports = function check(str, bracketsConfig) {
    let arr = str.split("");
    let stack = [];
    let openBracket = [];
    let closeBracket = [];

    bracketsConfig.forEach((v) => {
        openBracket.push(v[0]);
        closeBracket.push(v[1]);
    });

    //main idea - if bracket from array is closing we check bracket before it in stack and pop it, opening bracket just push in stack
    for (let i = 0; i < arr.length; i++) {
        // case : open bracket and close are the same
        if (
            stack.length > 0 &&
            openBracket.includes(arr[i]) &&
            closeBracket.includes(arr[i])
        ) {
            let lastBracket = stack[stack.length - 1];

            if (lastBracket === arr[i]) {
                // bracket from array is closing bracket, pop bracket from stack
                stack.pop();
                continue;
            } else {
                // bracket from array is opening bracket
                stack.push(arr[i]);
                continue;
            }
        }

        if (openBracket.includes(arr[i])) {
            stack.push(arr[i]);

            continue;
        }

        if (stack.length === 0) {
            // case - bracket is closing and array is empty
            return false;
        }

        //bracket from array is closing, compare with pair, index for both is the same
        let index = openBracket.indexOf(stack.pop());
        if (closeBracket[index] === arr[i]) {
            continue;
        } else {
            // error here
            return false;
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};
