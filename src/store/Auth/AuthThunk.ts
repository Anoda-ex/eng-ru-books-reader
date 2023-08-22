import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUserCredentials } from '../../pages/Auth/Auth';
export const checkAuthSubscribe = createAsyncThunk(
    'auth/checkAuthSubscribe',
    async (_, {rejectWithValue}) => {
        console.log('test 123');
        
        const auth = getAuth();
        auth.onAuthStateChanged((user) => {
            console.log('user');
            
            if (user) {
                console.log("Вошел", user)
                return true
            } else {
                console.log("Не вошел", user)
            }
        })
    }
)
export const signUpWithPassword = createAsyncThunk(
    'auth/signUpWithPassword',
    async (payload: IUserCredentials, {rejectWithValue}) => {
        console.log('signUpWithPassword');
        
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, payload.email.value, payload.password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('success user');
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

        });
    }
)

// signInWithPassword(context, data){
//     return new Promise((resolve, reject) => {
//         const auth = getAuth();
//         signInWithEmailAndPassword(auth, data.email, data.password)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             resolve({success:true})
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             context.commit('setFirebaseError', {key:'authError', errorCode, errorMessage})


//         });
//     })
    

// },
// signUpWithPassword(context, data){
//     return new Promise((resolve, reject) => {
//         const auth = getAuth();
//         createUserWithEmailAndPassword(auth, data.email, data.password)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             resolve({success:true})
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;

//             context.commit('setFirebaseError', {key:'authError', errorCode, errorMessage})
//         });

//       })
// },


// checkAuth(context){
//     const auth = getAuth();
//     auth.onAuthStateChanged((user) => {
//         if (user) {
//               console.log("Вошел")
//             context.commit('setUser', user)
//             context.dispatch('getMyUserData', user.uid)
//         } else {
//             console.log("Не вошел")
//             context.commit('setUser', null)
//         }
//         context.commit('setGlobalLoading', false)
//     })
// },