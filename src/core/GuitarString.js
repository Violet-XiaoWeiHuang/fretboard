import Note from './Note'

function GuitarString (root, length) {
    const rootNote = new Note(root)
    return {
        root () {
            return root
        },
        noteAtFret (index) {
            return rootNote.next(index)
        }
    }
}

export default GuitarString
