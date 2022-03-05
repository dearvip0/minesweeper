import React, { FC } from 'react';

function App() {
	return (
		<>
			<Header />
		</>
	);
}

const Header: FC = ({ children }) => {
	return <header className='App-header'>{children}</header>;
};

export default App;
