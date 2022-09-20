import React from 'react'

export default function ({ size, children }) {
  let tag = 'h1'
  if (size === 'sm') {
    tag = 'h3'
  } else if (size === 'md') {
    tag = 'h2'
  }
  return React.createElement(tag, null, `✨✨✨${children}✨✨✨`)
}