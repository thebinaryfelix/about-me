import { useCallback, useEffect, useState } from 'react'
import { useTheme } from '@material-ui/core'

const useBreakpoint = () => {
  const theme = useTheme()
  const getBreakpoint = useCallback(() => {
    // eslint-disable-next-line no-undef
    const width = window.innerWidth || 0
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
    /* eslint-disable no-undef */
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
    /* eslint-enable no-undef */
  }, [handleResize])

  return breakpoint
}

export default useBreakpoint
