import React, {Component} from 'react'
import './GuitarString.css'

import GuitarStringModel from '../core/GuitarString'
import Note from '../core/Note'

import NoteView from './NoteView'
import NutView from './NutView'

class GuitarString extends Component {
  state = {
      notes: []
  }

  constructor (props) {
      super(props)

      this.state.notes = this.getNotes({
          rootNote: this.props.rootNote,
          frets   : this.props.frets
      })
  }

  getNotes ({rootNote, frets}) {
      const guitarString = GuitarStringModel(rootNote, frets)
      let notes = []
      for (let i = 1; i < frets + 1; i++) {
          notes.push(guitarString.noteAtFret(i))
      }
      return notes
  }

  componentWillReceiveProps (nextProps) {
      this.setState({
          notes: this.getNotes({
              rootNote: nextProps.rootNote,
              frets   : nextProps.frets
          })
      })
  }

  render () {
      const {onClick, focusNote, rootNote, scale, string, selectedNotes} = this.props
      return (
          <div className="GuitarString">
              <NutView note={Note(rootNote)}
                  string={string}
                  selectedNotes={selectedNotes}
                  onClick={onClick}/>
              {this.state.notes.map((note, index) =>
                  <NoteView note={note}
                      onClick={onClick}
                      scale={scale}
                      focusNote={focusNote}
                      selectedNotes={selectedNotes}
                      string={string}
                      key={index + note.toString()}/>
              )}
          </div>
      )
  }
}

export default GuitarString
