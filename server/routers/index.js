'use strict'

const express = require('express')
const router = express.Router()
const userRouter = require('./user')

router.use('/member', userRouter)

module.exports = router