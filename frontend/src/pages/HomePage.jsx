import React, { useCallback, useEffect, useState } from 'react'
import RepoList from '../components/RepoList'
import { Profile } from '../components/Profile'
import SortRepos from '../components/SortRepos'
import Search from '../components/Search'
import Spinner from '../components/Spinner'
import toast from 'react-hot-toast'

const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [sortType, setSortType] = useState("recent");

  const getUserProfileAndRepositories = useCallback(async (username = "riyal-rj") => {
    setLoading(true);
    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      const userProfile = await userRes.json();
      setUserProfile(userProfile);

      const reposRes = await fetch(userProfile.repos_url);
      const repos = await reposRes.json();
      setRepos(repos);
      setUserProfile(userProfile);
      return { userProfile, repos };
    } catch (error) {
      toast.error(error.message);
    }
    finally {
      setLoading(false);
    }
  },[]);
  console.log(userProfile);
  useEffect(() => {
    getUserProfileAndRepositories();
  }, [getUserProfileAndRepositories]);

  const onSearch=async(e,username)=>{
    e.preventDefault();

    setLoading(true);;
    setRepos([]);
    setUserProfile(null);

    const {userProfile,repos}=await getUserProfileAndRepositories(username);
    setUserProfile(userProfile);
    setRepos(repos);
    setLoading(false);
    setSortType("recent");
  };

  const onSort=async(sortType)=>{
    if(sortType==="recent"){
      repos.sort((repo1,repo2)=> new Date(repo2.created_at)-new Date(repo1.created_at));
    }
    else if(sortType==="stars"){
      repos.sort((repo1,repo2)=> repo2.stargazers_count-repo1.stargazers_count);
    }
    else if(sortType==="forks"){
      repos.sort((repo1,repo2)=> repo2.forks_count-repo1.forks_count);
    }
    setSortType(sortType);
    setRepos([...repos]);
  }


  return (
    <div className='m-4'>
      <Search onSearch={onSearch} />
     {repos.length > 0 && <SortRepos onSort={onSort} sortType={sortType} />}
      <div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
        {userProfile && !loading && <Profile userProfile={userProfile} />}
       {!loading && <RepoList repos={repos} />}
        {loading && <Spinner />}
      </div>
    </div>
  )
}

export default HomePage