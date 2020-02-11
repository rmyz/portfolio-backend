import admin from 'firebase-admin';
import { firebaseConfig } from '../config';

admin.initializeApp(firebaseConfig);
const firebase = admin.firestore();

export default firebase;
