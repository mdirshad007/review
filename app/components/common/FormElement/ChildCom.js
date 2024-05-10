import React from 'react'

export default function ChildCom({sendDataToParent}) {
    sendDataToParent("Hello world!")
  return (
    <div>ChildCom</div>
  )
}
