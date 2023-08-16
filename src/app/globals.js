// "use client"
// import { useState } from "react";



// export let [useridGlobal, setUseridGlobal] = useState('globalThis.userid ?? userid');

// export let useridGlobal = "globalThis.userid ?? userid";




export const setUserIdGlobal = (userid) => {
  const useridGlobal = globalThis.userid ?? userid;
  return useridGlobal;
};

  // const globalForUserId = globalThis;
  // export const userid = globalForUserId.userid ?? new PrismaClient();
  // globalForUserId.userid = userid;

// export const setUserIdGlobal = (userid) => {
//   const globalForUserId = globalThis;
//   const userid = globalForUserId.userid ?? new PrismaClient();
//   globalForUserId.userid = userid;
// };
