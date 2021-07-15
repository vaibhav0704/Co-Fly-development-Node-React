import authenticated from '../middlewares/authenticated.js'

const testRoutes = (app) => {
    
    app.get('/protected_page', authenticated, (req, res) => {
        res.status(200).send('This is a protected route')
    })

}

export default testRoutes;