import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  arrayUnion,
  Timestamp,
} from "firebase/firestore";
import app from "../firebase";
import axios from "axios";

export const GET_LIST_USER = "GET_LIST_USER";
export const ADD_USER = "ADD_USER";
export const ADD_POST = "ADD_POST";
export const ADD_POST_PROFILE = "ADD_POST_PROFILE";
export const LOGOUT = "LOGOUT";
export const UPDATE_PUBLISH = "UPDATE_PUBLISH";
export const UNPUBLISH = "UNPUBLISH";
export const GET_COMMENTS = "GET_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const ADD_PROFILE_PICT = "ADD_PROFILE_PICT";
export const EDIT_PROFILE_PICT = "EDIT_PROFILE_PICT";
export const GET_CURRENT_USER = "GET_CURRENT_USER";
export const CHANGE_LOADING = "CHANGE_LOADING";
export const CHANGE_TOKEN = "CHANGE_TOKEN";
export const ERR_MESSAGE = "ERR_MESSAGE";
export const STORE_USER_DATA = "STORE_USER_DATA";


const token = localStorage.getItem('token')

export const logout = () => async (dispatch) => {
  const auth = getAuth(app);

  try {
    await signOut(auth);
    dispatch({ type: LOGOUT });
    return true;
  } catch (error) {
    console.error(error.message);
    return false;
  }
};



export const addUser = (data) => async (dispatch) => {
  dispatch({
    type: ADD_USER,
    payload: { loading: true, data: false, errorMessage: false },
  });

  try {
    const res = await axios.post("https://betweeder-production.up.railway.app/register", data);
    const registeredData = res.data;
    dispatch({
      type: ADD_USER,
      payload: {
        loading: false,
        data: registeredData,
        errorMessage: false,
      },
    });
    return true;
  } catch (error) {
    const errorMes = error.response?.data?.message;
    dispatch({
      type: ADD_USER,
      payload: { loading: false, data: false, errorMessage: errorMes },
    });
    return false;
  }
};



export const addPost = (data) => async (dispatch) => {
  dispatch({
    type: ADD_POST,
    payload: { loading: true, data: false, errorMessage: false },
  });


  try {
  const response = await axios.post('https://betweeder-production.up.railway.app/thread',data,{
    headers:{
      Authorization: `Bearer ${token}`
    }
  })
  dispatch({
    type: ADD_POST,
    payload:{
      loading: false,
      data: response.data,
      errorMessage: false
    }
  })
  }catch(err){
    dispatch({
      type: ADD_POST,
      payload:{
        loading: false,
        data: false,
        errorMessage: err.message
      }
    })
  }
};

export const addPostProfile = (data) => async (dispatch) => {
  const id = localStorage.getItem("id");
  dispatch({
    type: ADD_POST_PROFILE,
    payload: { loading: true, data: false, errorMessage: false },
  });
  const db = getFirestore(app);

  try {
    await addDoc(collection(db, `users/${id}/threads`), data);
    dispatch({
      type: ADD_POST_PROFILE,
      payload: { loading: false, data: true, errorMessage: false },
    });
    return true;
  } catch (error) {
    dispatch({
      type: ADD_POST_PROFILE,
      payload: { loading: false, data: false, errorMessage: error.message },
    });
    return false;
  }
};

export const addComment =
  ({content, uid}) =>
  async (dispatch) => {
    dispatch({
      type: ADD_COMMENT,
      payload: { loading: true, data: false, errorMessage: false },
    });
   
    try {
      const {data} = await axios.patch(`https://betweeder-production.up.railway.app/threads/${uid}/comments`,{content},{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      dispatch({
        type: ADD_COMMENT,
        payload: { loading: false, data: data, errorMessage: false },
      });
    } catch (error) {
      console.error(error.message);
      dispatch({
        type: ADD_COMMENT,
        payload: { loading: false, data: false, errorMessage: error.message },
      });
    }
  };

export const addProfileImg = (data) => {
  return async (dispatch) => {
    const id = localStorage.getItem("id");
    dispatch({
      type: ADD_PROFILE_PICT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    const db = getFirestore(app);

    try {
      const userDocRef = doc(db, "users", id);
      await setDoc(userDocRef, data);

      dispatch({
        type: ADD_PROFILE_PICT,
        payload: {
          loading: false,
          data: data,
          errorMessage: false,
        },
      });

      window.location = "/login";
    } catch (err) {
      dispatch({
        type: ADD_PROFILE_PICT,
        payload: {
          loading: false,
          data: false,
          errorMessage: err.message,
        },
      });
    }
  };
};

export const editProfileImg = (data) => {
  return async (dispatch) => {
    const id = localStorage.getItem("id");
    dispatch({
      type: EDIT_PROFILE_PICT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    const db = getFirestore(app);

    try {
      const userDocRef = doc(db, "users", id);
      await updateDoc(userDocRef, data);

      dispatch({
        type: EDIT_PROFILE_PICT,
        payload: {
          loading: false,
          data: data,
          errorMessage: false,
        },
      });

      localStorage.setItem("img", data.profile_img);
      window.location = `/profile/${id}`;
    } catch (err) {
      dispatch({
        type: EDIT_PROFILE_PICT,
        payload: {
          loading: false,
          data: false,
          errorMessage: err.message,
        },
      });
    }
  };
};
