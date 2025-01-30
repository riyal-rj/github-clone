import React from 'react'
import RepoList from '../components/RepoList'
import { Profile } from '../components/Profile'
import SortRepos from '../components/SortRepos'
import Search from '../components/Search'
import Spinner from '../components/Spinner'

const HomePage = () => {
  return (
    <div className='m-4'>
			<Search />
			<SortRepos />
			<div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
				<Profile />
				<RepoList />
				<Spinner />
			</div>
		</div>
  )
}

export default HomePage