module.exports = function check(str, bracketsConfig) {
    let arr = str.split("");
    let stack = [];
    let openBracket = [];
    let closeBracket = [];

    bracketsConfig.forEach((v) => {
        openBracket.push(v[0]);
        closeBracket.push(v[1]);
    });
    console.log("openBracket", openBracket);
    console.log("closeBracket", closeBracket);

    for (let i = 0; i < arr.length; i++) {

        if (stack.length > 0 && arr[i] === "|") {
            let lastBracket = stack[stack.length - 1];
            if (lastBracket === "|") {
                stack.pop()
                continue;
            } else {
            stack.push(arr[i]);
            continue;
            }
        }


        if (openBracket.includes(arr[i])) {
            stack.push(arr[i]);
            console.log("stack", stack);
            continue;
        }


        if (stack.length === 0) {
            return false;
        }

        console.log("arr[i]", arr[i]);
        
        let index = openBracket.indexOf(stack.pop());
        console.log(index);
        if (closeBracket[index] === arr[i]) {
            console.log("closeBracket[index]", closeBracket[index]);
            console.log("arr[i]", arr[i]);
            continue;
        } else {
            console.log(" return false", "retfalse");
            console.log("closeBracket[index]", closeBracket[index]);
            console.log("arr[i]", arr[i]);
            return false;
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};
