import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyCaK8JIurUT8bFCSTLOUlrUmspABLdtchU",
      authDomain: "idlegame-1f133.firebaseapp.com",
      databaseURL: "https://idlegame-1f133.firebaseio.com",
      projectId: "idlegame-1f133",
      storageBucket: "idlegame-1f133.appspot.com",
      messagingSenderId: "799768587608"
};

firebase.initializeApp(config);

export default firebase;