import React from 'react';

import styles from './MovieErrorBoundary.module.css';

export class MovieErrorBoundary extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <h1 className={styles.error}>
                    Oops, something went wrong... We are doing our best to fix the issue
                </h1>
            )
        } else {
            return this.props.children;
        }
    };
}