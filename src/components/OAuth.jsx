import { useLocation, useNavigate } from 'react-router-dom';
import db from '../firebase';
import { auth } from '../firebase';
import { getDoc, setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import googleIcon from '../assets/svg/googleIcon.svg';

const OAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //* Create Ref in DB
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      //* Check if user exist there
      if (!docSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate('/profile');
    } catch (error) {
      toast.error('Could not authorize with Google');
    }
  };

  return (
    <div className='socialLogin'>
      <p>Sign {location.pathname === '/sign-up' ? 'up' : 'in'} with</p>
      <button className='socialIconDiv' onClick={onGoogleClick}>
        <img className='socialIconImg' src={googleIcon} alt='google' />
      </button>
    </div>
  );
};

export default OAuth;
