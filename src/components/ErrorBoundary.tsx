import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
          <div className="max-w-md text-center space-y-4">
            <h2 className="text-2xl font-medium text-[#005270]">
              Đã xảy ra lỗi
            </h2>
            <p className="text-gray-600">
              Rất tiếc, đã xảy ra lỗi không mong muốn. Vui lòng thử lại sau.
            </p>
            {this.state.error && (
              <pre className="bg-gray-100 p-4 rounded-lg text-sm text-left overflow-auto">
                {this.state.error.message}
              </pre>
            )}
            <div className="flex gap-4 justify-center">
              <Button
                onClick={this.handleRetry}
                className="bg-[#005270] hover:bg-[#005270]/90 text-white"
              >
                Thử lại
              </Button>
              <Button
                onClick={() => window.location.href = '/login'}
                variant="outline"
              >
                Quay lại trang đăng nhập
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;