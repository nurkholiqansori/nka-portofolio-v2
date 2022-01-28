import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import NProgress from 'nprogress'
import '../styles/NProgress.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      NProgress.start().configure({
        showSpinner: false,
        easing: 'ease',
        trickle: false,
      })
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <ThemeProvider attribute='class'>
      <div className='bg-gradient-to-br from-cyan-500 to-fuchsia-500 dark:from-gray-800 dark:to-black'>
        <div className='container'>
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
