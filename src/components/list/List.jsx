import ChatList from './chatList/ChatList'
import './list.css'
import UserInfo from './user/UserInfo'
import { useChatStore } from '../../lib/chatStore'
import { auth } from '../../lib/firebase'

const List = () => {

  const { resetChat } = useChatStore()

  const handleLogout = () => {
    auth.signOut();
    resetChat()
  };

  return (
    <div className='list'>
      <UserInfo />
      <ChatList />
      <button className='logOut' onClick={ handleLogout }>Log Out</button>
    </div>
  )
}

export default List