import { useCallback, useEffect, useState } from 'react'
import { useTheme } from '@material-ui/core'

const useBreakpoint = () => {
  const theme = useTheme()
  const getBreakpoint = useCallback(() => {
    let width = 0
    if (typeof window !== 'undefined') {
      width = window.innerWidth
    }
    const { keys } = theme.breakpoints || []
    return keys.reduce(
      (current, key) =>
        width >= theme.breakpoints.values[key] ? key : current,
      'sm',
    )
  }, [theme.breakpoints.keys, theme.breakpoints.values])

  const [breakpoint, setBreakpoint] = useState(getBreakpoint())
  const handleResize = useCallback(() => {
    setBreakpoint(getBreakpoint())
  }, [getBreakpoint])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return breakpoint
}

export default useBreakpoint
