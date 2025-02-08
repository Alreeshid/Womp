import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
  return (
    <>
        <h3>Link to Login</h3>
        <Link to="/login" >Login</Link>

    </>
  );
}