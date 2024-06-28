export function addSomthing(something) {
    return {
        type: 'Add something',
        payload: {
            something: something
        }
    }
}