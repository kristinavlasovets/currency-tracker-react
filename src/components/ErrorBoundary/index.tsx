import { errorBoundaryText } from '@constants/texts/components/errorBoundary'
import { Component } from 'react'

import { ErrorMessage, Wrapper } from './styles'
import { ErrorBoundaryProps, ErrorBoundaryState } from './types'

const { message } = errorBoundaryText

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  public componentDidCatch(error: Error) {
    this.setState({ error: error })
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Wrapper>
          <ErrorMessage>{message}</ErrorMessage>
        </Wrapper>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
