// // pages/api/users.js

// import { prisma } from "@/db";
export default async function POST(request) {
  // const res = await request.json() // res now contains body
  console.log("------------------------" + JSON.stringify(request) + "-------------------------------------------");
}
// import { prisma } from "@/db";
// // pages/api/users.js

// import prisma from "../../lib/prisma";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { name } = req.body;
//     try {
//       const newUser = await prisma.user4.create({
//         data: {
//           name: "csdcsd",
//           username: "shihanmilinda7",
//           email: "shihanmilinda7gmailcom",
//           password: "1234",
//           jobrole: "Developer",
//           company: "sds",
//         },
//       });
//       res.status(201).json(newUser);
//     } catch (error) {
//       res.status(500).json({ error: "Error saving user." });
//     }
//   } else if (req.method === "GET") {
//     const users = await prisma.user4.findMany();
//     res.status(200).json(users);
//   } else {
//     res.status(405).json({ error: "Method not allowed." });
//   }
// }
// export default async function handle(req, res) {
//   const body = req.body;

//   console.log("------------------------" + JSON.stringify(req) + "-------------------------------------------");
// }
