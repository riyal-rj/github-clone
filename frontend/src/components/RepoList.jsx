import React from 'react'
import { RepositoryCom } from './RepositoryCom';

const RepoList = ({repos,alwaysFullWidth=false}) => {
	const className = alwaysFullWidth ? 'w-full' : 'lg:w-2/3 w-full';
    return (
		<div className={`${className} w-full bg-glass rounded-lg px-8 py-6`}>
			<ol className='relative border-s border-gray-200'>
                {repos.map((repo) => (
                    <RepositoryCom key={repo.id} repo={repo} />
                ))}
			</ol>
		</div>
	);
}

export default RepoList