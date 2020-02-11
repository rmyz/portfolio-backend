const {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_DATABASE_URL,
  FIREBASE_COLLECTION,
  FIREBASE_DOC,
} = process.env;

export const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  databaseUrl: FIREBASE_DATABASE_URL,
};

export { FIREBASE_COLLECTION as firebaseCollection, FIREBASE_DOC as firebaseDoc };
