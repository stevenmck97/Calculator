function operate(x, y) {
    let compute;
    switch (operation) {
        case '+':
            compute = x + y;
            break;

        case '-':
            compute = x - y;
            break;

        case '*':
            compute = x * y;
            break;

        case '/':
            compute = x / y;
            break;
        
        default:
            return
    }
}