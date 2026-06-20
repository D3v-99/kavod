import { useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import './PageTransition.css'

export default function PageTransition({ children }) {
  const location = useLocation()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState('page-enter')
  const prevPath = useRef(location.pathname)

  useEffect(() => {
    if (location.pathname !== prevPath.current) {
      setTransitionStage('page-exit')
      prevPath.current = location.pathname
    }
  }, [location.pathname])

  useEffect(() => {
    if (transitionStage === 'page-exit') {
      const timeout = setTimeout(() => {
        setDisplayChildren(children)
        setTransitionStage('page-enter')
      }, 280)
      return () => clearTimeout(timeout)
    }
  }, [transitionStage, children])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <div className={`page-transition ${transitionStage}`}>
      {displayChildren}
    </div>
  )
}
