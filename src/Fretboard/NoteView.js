'use strict'

import React, {Component} from 'react'
import _ from './NoteView.css'

class NoteView extends Component {
  render () {
    return (
      <div className='NoteView'>
        <div className='note-area'>
          <div className='string'></div>
          <div className='note'>
            {this.props.note.toString()}
          </div>
        </div>
        <div className='fret'></div>
      </div>
    )
  }
}

export default NoteView
