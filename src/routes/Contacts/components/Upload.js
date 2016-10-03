import React from 'react'
import Dropzone from 'react-dropzone'

const upload = (files, next) => {
  const file = files[0]
  const fileReader = new FileReader()

  fileReader.onload = (fileLoadedEvent) => {
    const base64 = fileLoadedEvent.target.result
    next(base64)
  }
  fileReader.readAsDataURL(file)
}

// TODO: Move to common components folder
export const Upload = (field) => {
  const { onChange } = field.input

  return (
    <Dropzone onDrop={(files) => upload(files, onChange)}>
      <div>Drop or click to upload</div>
    </Dropzone>
  )
}

export default Upload
