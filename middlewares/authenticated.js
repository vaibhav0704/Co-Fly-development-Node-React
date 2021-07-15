const authenticated = (req, res, next) => {
    const user = req.user
    if(user){
        res.status(200)
    }
    else{
        res.status(401).redirect('/auth/google')
    }
    next()
}

export default authenticated