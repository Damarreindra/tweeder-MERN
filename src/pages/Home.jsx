import React, { useEffect } from "react";
import PagesTemplate from "../components/Template/Pages";
import TweedForm from "../components/AddPost";
import MainCard from "../components/Card/MainCard";
import { useDispatch, useSelector } from "react-redux";
import { getThreads } from "../actions/threadsAction";
import PageSkeleton from "../components/Skeleton/PageSkeleton";
import { Flex, useDisclosure } from "@chakra-ui/react";
import NavbarMobile from "../components/navbar/NavbarMobile";
import { useAuth } from "../auth/AuthContext";
import {motion} from "framer-motion"

function Home() {
  const threads = useSelector((state) => state.ThreadsReducer.getThreadsResult);
  const refresh = useSelector((state) => state.UserReducer.addPostResult);
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = localStorage.getItem('token')

  useEffect(() => {
    if(token){
      dispatch(getThreads());

    }
  }, [refresh, token]);

  const sortedThreads = threads
    ? threads.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    : [];
  return (
    <>
      {sortedThreads && user ? (
        <PagesTemplate onOpen={onOpen} isOpen={isOpen} onClose={onClose}>
          <Flex display={{ md: "none" }}>
            <NavbarMobile user={user} onOpen={onOpen} />
          </Flex>

          <TweedForm />

          {sortedThreads.map((thread, index) => (
             <motion.div
             initial={{ y: -50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.5 }}
             >
            <MainCard key={index} user={user} thread={thread} />
              </motion.div>
          ))}
        </PagesTemplate>
      ) : (
        
        <PageSkeleton />
      )}
    </>
  );
}

export default Home;
