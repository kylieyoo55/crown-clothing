import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore =firebase.firestore();

firestore.collection('users').doc('fDXSeyEEJlSLfHkcbEMg').collection('cartItems').doc('7ic5MuoXUkqyNy1q7P0K');
firestore.doc('/users/fDXSeyEEJlSLfHkcbEMg/cartItems/7ic5MuoXUkqyNy1q7P0K');
firestore.collection('/users/fDXSeyEEJlSLfHkcbEMg/cartItems');