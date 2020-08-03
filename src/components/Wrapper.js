import React, { useState, useEffect } from 'react'
import { FaTwitter } from 'react-icons/fa'

export default function Wrapper() {
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    refresh()
  }, [])

  const refresh = () => {
    fetch("https://api.chucknorris.io/jokes/random", {
      "method": "GET",
      "headers": {
        "cookie": "__cfduid=d39a80a134aecca92912e4451b09531d41596490433"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.icon_url)
        setText(data.value)
        setAuthor(data.icon_url)
      })
      .catch(err => console.error(err))
  }

  const handleClick = () => {
    refresh()
  }

  return (
    <div id='quote-box' >
      <p id='text'>{text}</p>
      <img src={author} id='author' alt={author} />
      {/* <p id='author'>{author}</p> */}
      <button id='new-quote' onClick={() => handleClick()}>New quote</button>
      <a href="http://twitter.com/intent/tweet" id='tweet-quote'>
        <FaTwitter className='tweet-icon' />
      </a>
    </div>
  )
}
