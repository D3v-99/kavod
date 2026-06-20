import { useState } from 'react'
import './ChatWidget.css'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-widget__popup">
          <div className="chat-widget__popup-inner">
            <button className="chat-widget__close" onClick={() => setOpen(false)} aria-label="Close chat">
              &times;
            </button>
            <span className="chat-widget__icon-large">💬</span>
            <p className="chat-widget__message">Feature currently unavailable</p>
            <p className="chat-widget__sub">We&apos;re working on bringing live chat to you soon.</p>
          </div>
        </div>
      )}
      <button
        className="chat-widget__fab"
        onClick={() => setOpen(!open)}
        aria-label="Open chat"
      >
        <span className="chat-widget__fab-icon">{open ? '×' : '💬'}</span>
      </button>
    </div>
  )
}
