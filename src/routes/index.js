const express = require ('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/admin/task/', async (req, res) => {
 const tasks =  await Task.find();
 console.log(tasks);

res.render('admin/task/index', {

    tasks

  });

});
router.get('/admin/task/delete/:id', async (req,res) => {

          const { id } = req.params;
	 await Task.remove({_id: id});
	 res.redirect('/admin/task/');
      });

router.get('/admin/task/done/:id', async (req,res) => {

	const { id } = req.params;

        const task =  await Task.findById(id);

        task.status = !task.status;

	await task.save(); 

       res.redirect('/admin/task/');
    });


router.get('/admin/task/edit/:id', async (req,res) => {

	const { id } = req.params;

        const tasks =  await Task.findById(id);

	res.render('admin/task/edit', { tasks })

       
    });

router.post('/admin/task/edit/:id', async (req, res, next) => {
	const { id } = req.params;
	await Task.update({_id: id}, req.body);
	res.redirect('/admin/task/');

});

router.post('/admin/task/add', async (req, res) => {
        
	//console.log(new Task(req.body));

	//console.log(req.body);

	const task =  new Task(req.body);

	await task.save()
	
	res.redirect('/admin/task/');


});


router.get('/', async (req, res) => {
	const tasks =  await Task.find();
	console.log(tasks);
       
       res.render('index', {
       
	   tasks
       
	 });
       
       });




module.exports = router;
