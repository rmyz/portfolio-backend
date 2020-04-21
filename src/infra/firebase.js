import admin from 'firebase-admin';
import { firebaseConfig, credential } from '../config';

admin.initializeApp({ credential: admin.credential.cert(credential), ...firebaseConfig });
const firebase = admin.firestore();

export default firebase;
