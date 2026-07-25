const jwt = require("jsonwebtoken")

const auth = async (req, res, next) => {
    try {
        let token = req.headers.authorization; //Headers me ham token bhejte h use secure krne ke lie
        if (!token) {
            return res.status(401).json({ msg: "Token is Required" })
        }
        token = token.split(" ")[1]; //hame token is format me milta h { Bearer werhjmnb56ujfgvyhtr } bearer ek method h token ko send ya receive krne ka hamne yha space (" ") se token or bearer keyword ko split kia h or index-1 ko token me le lie h mtlb token ko

        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ msg: "Invalid or Expired TOken" })
            }
            req.userId = decodedToken.userId;  //token banate time hamne userId di thi usko token se extract krke req me userId me aage send kia h
            next();
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "Internal Server Error" })
    }
}




module.exports = auth