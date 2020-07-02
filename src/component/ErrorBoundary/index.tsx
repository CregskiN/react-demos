import React, { Component } from 'react';

interface ErrorBoundaryProps { };
interface ErrorBoundaryState {
    hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error: Error) {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // 你同样可以将错误日志上报给服务器
        console.group();
        console.log('ErrorBoundary catch a error:');
        console.info('error', error);
        console.info('error info', errorInfo);
        console.groupEnd()
    }


    render() {
        console.log('component ErrorBoundary render...');
        const { children } = this.props;
        const { hasError } = this.state;
        // return (
        //     <>
        //         {
        //             hasError ? 'Something Wrong' : children
        //         }
        //     </>

        // )
        if (hasError) {
            return 'Something wrong';
        } else {
            return children;
        }
    }
}

export default ErrorBoundary;