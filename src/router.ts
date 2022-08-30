import express from 'express'
import controller from './controllers'

const router = express.Router()

router.route(`/version`).get((req, res) => {
  res.send(require(`../package.json`).version)
})

router.route('/').post(controller.myEntity.create)
router.route('/').get(controller.myEntity.list)
router.route('/:id').put(controller.myEntity.update)
router.route('/:id').delete(controller.myEntity.del)

router.route('/login').post(controller.auth.login)

export default router
