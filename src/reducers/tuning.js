const tunings = [
    { 
        name : 'Standard E',           
        value: ['E', 'A', 'D', 'G', 'B', 'E']
    },
    {
        name : 'Standard C',
        value: ['C', 'F', 'A#', 'D#', 'G', 'C']
    },
    {
        name : 'Standard D',
        value: ['D', 'G', 'C', 'F', 'A', 'D'],
    },
    {
        name : 'Drop C',
        value: ['C', 'G', 'C', 'F', 'A', 'D']
    },
    {
        name : 'Standard B (7 String)',
        value: ['B', 'E', 'A', 'D', 'G', 'B', 'E']
    },
    {
        name : 'Bass E',
        value: ['E', 'A', 'D', 'G']
    }
]

function tuningOptions (state = tunings, action) {
    switch (action.type) {
    // case 'ADD_TUNING':
    //     state.
    default:
        return state
    }
}

const tuningDefault = {
    name : 'Standard E',
    value: ['E', 'A', 'D', 'G', 'B', 'G']
}
function tuning (state = tuningDefault, action) {
    switch (action.type) {
    case 'SET_TUNING':
        state = action.value
        return state
    default:
        return state
    }
}

export {
    tuningOptions,
    tuning
}
