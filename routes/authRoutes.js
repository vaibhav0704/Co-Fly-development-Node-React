import passport from 'passport';

const authRoutes = (app) => {

    app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

    app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/protected_page')
    });

    app.get('/api/logout', (req, res) => {
        req.logout()
        res.redirect('/protected_page')        
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })
}

export default authRoutes