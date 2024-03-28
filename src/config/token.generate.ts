import jwt from "jsonwebtoken"

type User={
email:string,
password:string
}

const generateToken=(user:User)=>{
  const tokenSecret:string="secret";
  return jwt.sign(
      {data:user},tokenSecret
  )

}

export default generateToken;