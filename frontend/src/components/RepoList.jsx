import React from 'react'
import { RepositoryCom } from './RepositoryCom';

const RepoList = () => {
    return (
		<div className={`lg:w-2/3 w-full bg-glass rounded-lg px-8 py-6`}>
			<ol className='relative border-s border-gray-200'>
				<RepositoryCom />
				<RepositoryCom />
				<RepositoryCom />
			</ol>
		</div>
	);
}

export default RepoList