
import axios from "axios";
import { useDispatch } from "react-redux";
export const GET_THREADS = "GET_THREADS";
export const GET_THREAD = "GET_THREAD";
export const GET_DETAIL_THREAD = "GET_DETAIL_THREAD";
export const FIND_THREAD = "FIND_THREAD"

const token = localStorage.getItem("token");

export const getThreads = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_THREADS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    try {
      const response = await axios.get("https://betweeder-production.up.railway.app/threads", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: GET_THREADS,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_THREADS,
        payload: {
          loading: false,
          data: false,
          errorMessage: err.message,
        },
      });
    }
  };
};

export const getThread = (uid) => {
  return async (dispatch) => {
    dispatch({
      type: GET_THREAD,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    try {
      const response = await axios.get(`https://betweeder-production.up.railway.app/user-thread/${uid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: GET_THREAD,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_THREAD,
        payload: {
          loading: false,
          data: false,
          errorMessage: err.message,
        },
      });
    }
  };
};

export const getDetailThread = (id) => {

  return async (dispatch) => {
    dispatch({
      type: GET_DETAIL_THREAD,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    try {
    const response = await axios.get(`https://betweeder-production.up.railway.app/threads/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: GET_DETAIL_THREAD,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_DETAIL_THREAD,
        payload: {
          loading: false,
          data: false,
          errorMessage: err.message,
        },
      });
    }
  };
};


export const likeThread = async (threadId) => {
  try {
    const { data } = await axios.patch(
      `https://betweeder-production.up.railway.app/threads/${threadId}/like`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};




export const findThread = (query) => {
  return async (dispatch) => {
  dispatch({
    type: FIND_THREAD,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });
  try{
    const {data} = await axios.get(
      `https://betweeder-production.up.railway.app/search?query=${query}`,
    {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    dispatch({
      type: FIND_THREAD,
      payload: {
        loading: true,
        data: data,
        errorMessage: false,
      },
    });
  }catch(err){
    dispatch({
      type: FIND_THREAD,
      payload: {
        loading: false,
        data: false,
        errorMessage: err.message,
      },
    });
  }
}}

export const deleteThread = async (threadId) => {
  try {
    const { data } = await axios.delete(
      `https://betweeder-production.up.railway.app/thread/${threadId}/delete`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
