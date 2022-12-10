import type { AppProps } from "next/app"
import "bootstrap/dist/css/bootstrap.min.css"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { toast, Toaster } from "react-hot-toast"
import { useEffect, useState } from "react"
import type { Dispatch, SetStateAction } from "react"
import { Button } from "reactstrap"

const ToastComponent = ({
  setShowError,
}: {
  setShowError: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <span>
      Hey! Can you add your feedback?
      <Button onClick={() => setShowError(true)}>Submit feedback</Button>
    </span>
  )
}

/**
 * Component to simulate error
 */
const ErrorComponent = () => {
  useEffect(() => {
    undefined[0]
  }, [])

  return null
}

export default function App({ Component, pageProps }: AppProps) {
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      toast((t) => <ToastComponent setShowError={setShowError} />)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <div>
        <Toaster position="bottom-center" />
      </div>
      {showError ? <ErrorComponent /> : null}
    </>
  )
}
