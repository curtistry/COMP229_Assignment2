import express from 'express'
	import userCtrl from '../controllers/product.controller.js' 
	const router = express.Router()
	router.route('/api/products') 	//the products collection.
	.get(userCtrl.list)			//read user
	.post(userCtrl.create)		
	router.route('/api/products/:id') 
	.get(userCtrl.read)			//list all products in the database
	.put(userCtrl.update) 		//update user
	.delete(userCtrl.remove)	//remove user
router.param('id', userCtrl.productByID)
router.route('/api/products').post(userCtrl.create) 	//creating a new product
router.route('/api/products').get(userCtrl.list)
router.param('id', userCtrl.productByID)
router.route('/api/products/:id').get(userCtrl.read)
router.route('/api/products/:id').put(userCtrl.update)
router.route('/api/products/:id').delete(userCtrl.remove)




    
    
	export default router
