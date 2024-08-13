import React, { useEffect, useState } from "react";
import PagesTemplate from "../components/Template/Pages";
import { useDispatch, useSelector } from "react-redux";
import { getThread, getThreads } from "../actions/threadsAction";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Lottie from "lottie-react";
import NavbarProfile from "../components/navbar/NavbarProfile";
import ProfileCard from "../components/Card/ProfileCard";
import PageSkeleton from "../components/Skeleton/PageSkeleton";
import StaticNavbarProfile from "../components/navbar/StaticNavbarProfile";
import { useAuth } from "../auth/AuthContext";
import loadingAnimation from "../lottie/loading.json"
import {motion} from "framer-motion"
import { Text } from "@chakra-ui/react";

function Profile() {
  const threads = useSelector((state) => state.ThreadsReducer.getThreadResult);
  const dispatch = useDispatch();
  const {user} = useAuth()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getThreads());
  
  }, [dispatch]);

  useEffect(() => {
    dispatch(getThread(user._id));

  }, [dispatch]);



  const sortedThreads = threads
    ? threads.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    : [];
  return (
    <>
      {loading ? (
        <>
        <PageSkeleton />
        
        </>
      ) : (
        <PagesTemplate>
            {sortedThreads.length > 0 ? (
            <NavbarProfile user={user} thread={threads} />
          ) : (
            <StaticNavbarProfile />
          )}
         
          <Jumbotron user={user} />
          {sortedThreads ? (
            sortedThreads.map((thread, index) => (
              <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              >
              <ProfileCard key={index} user={user} thread={thread} />
              </motion.div>
            ))
          ) : (
           <Lottie animationData={loadingAnimation}/>
          )}
        </PagesTemplate>
      )}
    </>
  );
}

export default Profile;
