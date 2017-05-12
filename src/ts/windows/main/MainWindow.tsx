import * as React from 'react';

export interface Props {
	compiler: string;
	framework: string;
}

export class Hello extends React.Component<Props, any> {

    render() {
        return (
			<h1>
				Hello from {this.props.compiler} and {this.props.framework}!
			</h1>
		);
    }
}
