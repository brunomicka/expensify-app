import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

//project-882701102197

export { firebase, googleAuthProvider, twitterAuthProvider, database as default };

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').once('value').then((snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot)=> {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot)=> {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });


// database.ref('expenses').push({
//   description: 'rent',
//   note: 'bbbb',
//   amount: 10500,
//   createdAt:1000
// });

// database.ref('expenses').push({ 
//   description: 'hydro',
//   note: 'bbbb',
//   amount: 110055,
//   createdAt:1000
// });

// database.ref('expenses').push({
//   description: 'gas',
//   note: 'bbbb',
//   amount: 333000,
//   createdAt:1000
// });
// const firebaseNotes = {
//   notes : {
//     1: {
//       title:'First Note', body: 'aaaa'
//     },
//     1122334: {
//       title:'Another Note', body: 'aaaa' 
//     }
//   } 
// }

// const notes = [{ id: '12', title:'First Note', body: 'aaaa'}, { id: '761awww', title:'Another Note', body: 'aaaa'}];

// database.ref('notes').push({
//   title: 'aaa123aa',
//   body: 'bbbb'
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const obj = snapshot.val();
//   console.log(`${obj.name} is a ${obj.job.title} at ${obj.job.company}`);
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('job/title').set('Manager');
// }, 3500);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(20);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(35);
// }, 10500);


// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Bruno Michaelis',
//   age: 30,
//   stressLevel: 6,
//   job: {
//     title:'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Winnipeg',
//     country: 'Canada'
//   }
// }).then(() => {
//   console.log('Data is saved')
// }).catch((error) => {
//   console.log('This failed', error);
// });

// database.ref().update({
//   'job/company': 'Amazon',
//   'location/city': 'Seattle',
//   stressLevel: 9
// }).then(() => {
//   console.log('Data is saved')
// }).catch((error) => {
//   console.log('This failed', error);
// });

// database.ref('isSingle').set(null);

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data successfully removed');
//   })
//   .catch((e) => {
//     console.log(e);
//   });