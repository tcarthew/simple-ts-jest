function reverseValue(value: string): string {
    const arr = value.split('');
    
    return arr.reverse().join('');
}

function echoValue(value: string): string {
    return `Echo: ${value}`;
}

export {
    reverseValue,
    echoValue
};