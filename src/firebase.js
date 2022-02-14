import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from '@firebase/auth';
import { getStorage } from '@firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBiwyAgYZcHCtMfwNR9w65FtUzgMTGik0Q',
  authDomain: 'house-marketing-app.firebaseapp.com',
  projectId: 'house-marketing-app',
  storageBucket: 'house-marketing-app.appspot.com',
  messagingSenderId: '469266136857',
  appId: '1:469266136857:web:3a6c7bdaab9f413cf38f88',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth(app);
const storage = getStorage(app);
export default db;
export { auth, storage };
