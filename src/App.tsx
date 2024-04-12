import { useEffect,useState } from 'react'
import './App.css'
import { IUserDataItem, fetchContent } from './features/user/userSlice';
import { useAppDispatch, useAppSelector } from './store/hooks';
import UserCard from './components/user-card/UserCard';

function App() {

  const dispatch = useAppDispatch();
  const user_data = useAppSelector(state => state.users.userData);
  const isLoading = useAppSelector(state => state.users.isLoading);
  const [currentPage,setCurrentPage] = useState(1);

  useEffect(()=>{
    dispatch(fetchContent(currentPage));
  },[currentPage]);


  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 5
    ) {
      setCurrentPage(currentPage+1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className='loading-align-center'> {isLoading && <>Loading...</>}</div>
    <div className='user-cards-wrapper-container' style={isLoading?{opacity:0.4}:{}}>
      <div className='user-cards-container'>
        {user_data.map((user:IUserDataItem) => (
          <UserCard key={`${user.avatar}${user.email}`} user={user} />
        ))}
      </div>
    </div>
    </>
  )
}

export default App
