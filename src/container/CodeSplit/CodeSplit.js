import React,{ Component,Suspense } from 'react';
import MyErrorBoundary from './../../components/MyErrorBoundary/MyErrorBoundary';

const Title = React.lazy(()=> import('./../../components/Title/Title'));

class CodeSplit extends Component {
    render() {
        return(
            <MyErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <div>
                        <Title title='代码分割'/>
                    </div>
                </Suspense>
            </MyErrorBoundary>
        )
    }
}

export default CodeSplit;