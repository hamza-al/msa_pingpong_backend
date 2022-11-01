const router = require('express').Router()



router.get('/',(req,res)=>{
    res.send('user root');
})


//update user position on board
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.position) {
      try {
        req.body.position = req.body.newPosition
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    
  }
});
module.exports = router;