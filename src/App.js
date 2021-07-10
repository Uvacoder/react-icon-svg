import React, { Suspense } from 'react';
import Route from "./routes/route";
import Loader from "./component/loader";
const App = ( ) => {
	return (
		<Suspense fallback={( <Loader/> )}>
			<Route/>
		</Suspense>
	);
}
export default App;