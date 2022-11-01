const router = require('express').Router();
const User = require('../models/User');


router.get('/',(req,res)=>{
    res.send('HI')
})

//REGISTER FUNCTION
router.post('/register',async (req,res)=>{
    const newUser =  new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
    try{
        const user = await newUser.save();

        res.status(200).json(user)
    }
    catch(err){
        console.log(err)
    }
    
})
//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;