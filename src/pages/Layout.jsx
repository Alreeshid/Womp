import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";

import { getCurrentUser } from "aws-amplify/auth";
async function currentAuthenticatedUser() {
  try {
    const { username, userId, signInDetails } = await getCurrentUser();
    console.log(`The username: ${username}`);
    console.log(`The userId: ${userId}`);
    console.log(`The signInDetails: ${signInDetails}`);
  } catch (err) {
    console.log(err);
  }
}

export default function Layout(){
  currentAuthenticatedUser()
  return (
    <>
        <Navbar />

        <Outlet />
    </>
  );
}