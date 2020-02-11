import { firebaseCollection, firebaseDoc } from '../config';
import firebase from '../infra/firebase';

const blGetLinkedinInfo = async () => {
  const profile = await firebase
    .collection(firebaseCollection)
    .doc(firebaseDoc)
    .get();

  return profile.data();
};

export default blGetLinkedinInfo;
