const User = db.define('user', {
    email: {
        type: Sequelize.STRING,
        unique: true,
        aloowNull: false
    },
    password: {
        type: Sequelize.STRING,
        get(){
            return () => this.getDataValue('password');
        }
    }    
});

 // Instance method to be used for authentication in our route
User.prototype.correctPassword = function(pwd) {
    return pwd === this.password();
};

 // Using instance method in route
router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    });
    if(!user){
      res.status(401).send('User does not exist');
    } else if (!user.correctPassword(req.body.password)){
      res.status(401).send('Wrong Password for this account!');
    }
    else {
      req.login(user, error => (error ? next(error) : res.send(user)));
    }
  } catch (error) {
    next(error);
  }
});