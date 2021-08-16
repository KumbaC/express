const express = require ('express');
const router = express.Router();

const Task = require('../models/task');
const Category = require('../models/category');


/* RUTAS DE LAS TAREAS  */
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

/* RUTAS DE LAS TAREAS  */



/* RUTA DE LAS CATEGORIAS  */

router.get('/admin/category/', async (req, res) => {
const categories =  await Category.find();
console.log(categories);
       
res.render('admin/category/index', {

	categories
    

      });

});

router.get('/admin/category/edit/:id', async (req,res) => {

	const { id } = req.params;

        const categories =  await Category.findById(id);

	res.render('admin/category/edit', { categories })

       
    });

router.post('/admin/category/edit/:id', async (req, res, next) => {
	const { id } = req.params;
	await category.update({_id: id}, req.body);
	res.redirect('/admin/category/');

});

router.post('/admin/category/add', async (req, res) => {
        
	//console.log(new Task(req.body));

	//console.log(req.body);

	const category =  new category(req.body);

	await category.save()
	
	res.redirect('/admin/category/');

});

router.get('/admin/category/delete/:id', async (req,res) => {

	const { id } = req.params;
       await category.remove({_id: id});
       res.redirect('/admin/category/');
    });


/* RUTA DE LAS CATEGORIAS  */





router.get('/', async (req, res) => {
	const tasks =  await Task.find();
	console.log(tasks);
       
       res.render('index', {
       
	   tasks
       
	 });
       
       });




module.exports = router;
