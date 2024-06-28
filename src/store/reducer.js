export default function reducer(state = [], action) {
    switch (action.type) {
        case 'Add something':
            return [...state,
            action.payload.something
            ];
    }
}