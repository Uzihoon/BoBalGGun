import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import account from './config';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
admin.initializeApp({
  credential: admin.credential.cert(account as admin.ServiceAccount),
  databaseURL: 'https://bobalggun-95c2a.firebaseio.com',
});

export const getAnalysis = functions.https.onRequest(async (req, res) => {
  const appId = req.query.appId;
  const fromStation = req.query.fromStation;
  const toStation = req.query.toStation;

  // const
});

export const addMessage = functions.https.onRequest(async (req, res) => {
  const original = req.query.text;
  const snapshot = await admin.database().ref('/messages').push({original});
  res.redirect(303, snapshot.ref.toString());
});
