import React from "react";
import { ErrorInfo } from "react";
import styled from "styled-components/macro";
import { isDevelopment, isTest } from "../../environment";
import Alert from "../primitives/Alert";

interface Props {
  boundaryName?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

const StyledPre = styled.pre`
  padding-top: 0.5rem;
  word-break: break-all;
  white-space: pre-wrap;
  font-size: 0.8rem;
`;

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    if (isTest()) {
      throw error;
    }
    this.setState({ hasError: true, error, errorInfo });
    console.error(error, { errorInfo, boundaryName: this.props.boundaryName });
  }

  render() {
    if (this.state.hasError) {
      const stackTrace = this.state.errorInfo?.componentStack;
      const errormsg = this.state.error?.message;
      const info = this.props.boundaryName;

      return (
        <div>
          <Alert>
            <p>Beklager, det skjedde en teknisk feil.</p>
            {isDevelopment() && (stackTrace || errormsg) && (
              <div>
                <StyledPre>{errormsg || ""}</StyledPre>
                <StyledPre>{info || ""}</StyledPre>
                <StyledPre>{stackTrace || ""}</StyledPre>
              </div>
            )}
          </Alert>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
