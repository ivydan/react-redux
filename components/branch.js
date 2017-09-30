
import { withRouter } from 'react-router';

let Branch = (WrappedComponent) => {

	WrappedComponent = withRouter(WrappedComponent);



	return WrappedComponent;
}

export default Branch;