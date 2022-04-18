var express = require('express');
var router = express.Router();
const Tasks = require(`../models/sequelize`).Tasks;

/* GET  */
router.get('/', function (req, res) {
  let res_status = 200;
  let Role = req.session.role;
  let list={"tasks": [], "total":0,"role":Role};
  let offsetr=0; if(req.query.page){offsetr=(req.query.page-1)*3;}
  let field='createdAt'; if(req.query.field){field=req.query.field;}
  let sort='DESC';if(req.query.order_by){sort=req.query.order_by;}
  //======================
  try {
    (async () => {
      //---
      const { count, rows }= await Tasks.findAndCountAll({
        attributes: ['id', 'name','email','message','status','changetext','createdAt','updatedAt'],
        order: [
          [field, sort]
        ],
        offset: offsetr,
        limit: 3,
        raw:true
      }).catch(err=>console.log(err));
      if(count != 0) {
        list = {"tasks": rows, "total": count,"role":Role};
      } 
      res.status(res_status).send(list);
    //---
    })();
  } catch (error) {
    res_status = 400;
    res.status(res_status).send('Unable to connect to the database: '+error);
  }
  //======================
});

/* POST  */
router.post('/add', function (req, res) {
  let res_status = 200;
  let Val={};
  Val.name=req.body.data.name;
  Val.email=req.body.data.email;
  Val.message=req.body.data.message;

  //============== create
  try {
    (async () => {
      //---
      const dbadd = await Tasks.create(Val);
      switch (res_status) {
        case 200:
          res.status(res_status).send({id:dbadd.id});  
          break;
        case 401:
          res.status(res_status).send('401');
          break;
        default:
          res.status(res_status).send('Error');
      }
      //---
    })();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

/* PUT ID*/
router.put('/update/:id', function (req, res) {
  let res_status = 200;
  //======================
  try {
    (async () => { 
      //---
      let reqVal={};
      if(req.body.fieldupdate=='message'){reqVal={ message: req.body.message, changetext:true };}
      if(req.body.fieldupdate=='status'){
        req.body.status= (req.body.status == 0 )? 1 : 0 ;
        reqVal={ status: req.body.status};
      }
      const dbup = await Tasks.update(reqVal, {
        where: {
          id: req.body.id
        }
      });
      //---
    })();
  }catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  //======================
  switch (res_status) {
    case 200:
      res.status(res_status).send("ok");
      break;
    default:
      res.status(res_status).send('Error');
  }
});

module.exports = router;