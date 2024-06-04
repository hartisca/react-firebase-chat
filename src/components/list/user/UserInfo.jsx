import './userInfo.css'
import { useUserStore } from '../../../lib/userStore'
import { db } from '../../../lib/firebase'
import { useState } from 'react'
import { updateDoc, doc } from 'firebase/firestore'
import { useEffect } from 'react'


const UserInfo = () => {
  
  const { currentUser, fetchUserInfo } = useUserStore()
  const [ editing, setEditing ] = useState(false);
  const [ newState, setNewState ] = useState(currentUser.estado || '');

  const handleSaveState = async () => {
    try {
      await updateDoc(doc(db, 'users', currentUser.id), {
        estado: newState,
      });
      setEditing(false);
    } catch (error) {
      console.error('Error updating state:', error);
    }
  };

  useEffect(() => {    
    if (!editing) {
      fetchUserInfo(currentUser.id);
    }
  }, [editing]);

  return (
    <div className='userInfo'>
      <div className='user'>
        <img src={currentUser.avatar || './avatar.png'} alt='' />
        <div>
          <h2>{currentUser.username}</h2>
          <p className='myState'>{ currentUser.estado }</p>
        </div>        
      </div>
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src={editing ? "./cruzado.png" : "./edit.png"} alt="" onClick={() => setEditing((prev) => !prev)} />
      </div>
      {editing && (
        <div className='stateChange'>
          <input
            type="text"
            placeholder="Enter your state"
            value={newState}
            onChange={(e) => setNewState(e.target.value)}
            className='stateInput'          
          />
          <button onClick={handleSaveState}>Save State</button>
        </div>
      )}
    </div>
  );
};

export default UserInfo;