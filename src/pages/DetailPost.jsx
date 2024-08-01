import React from "react";
import PagesTemplate from "../components/Template/Pages";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetailThread } from "../actions/threadsAction";
import DetailCard from "../components/Card/DetailCard";
import NavbarDetailPost from "../components/navbar/NavbarDetailPost";
import CommentForm from "../components/AddComment/CommentForm";
import PageSkeleton from "../components/Skeleton/PageSkeleton";
import ReplyCard from "../components/Card/ReplyCard";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useAuth } from "../auth/AuthContext";


function DetailPost() {
  const { uid } = useParams();
  const {user} = useAuth()
  const detail = useSelector( (state) => state.ThreadsReducer.getDetailThreadResult);
  const comment = useSelector((state) => state.CommentReducer.addCommentResult);
  const dispatch = useDispatch();
  useEffect(() => {
    if (uid) {
     dispatch(getDetailThread(uid)) 
    }
  }, [uid]);
  useEffect(() => {
    if (comment) {
      dispatch(getDetailThread(uid));
    }
  }, [comment]);





 
  return (
    <>
      {detail && user ? (
        <PagesTemplate>
          <NavbarDetailPost />
          <DetailCard user={user} thread={detail} />

          <CommentForm uid={uid} />
          {detail.comments.length > 0 && (
            detail.comments.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).map((comment) =>( <ReplyCard thread={comment} />))
          )
          }
        </PagesTemplate>
      ) : (
        <PageSkeleton />
      )}
    </>
  );
}

export default DetailPost;
