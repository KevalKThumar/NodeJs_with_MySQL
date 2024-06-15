const models = require('../models');
const Validator = require('fastest-validator');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');


const signUp = (req, res) => {


    models.User.findOne({ where: { email: req.body.email } })
        .then(result => {
            if (result) {
                return res.status(409).json({
                    message: "Email already exist"
                })
            }
        })
        .catch(err => {
            return res.status(500).json({
                message: "oops! something went wrong",
                error: err
            })
        })


    bcryptjs.genSalt(10, (err, salt) => {
        const schema = {
            name: {
                type: "string",
                max: "255",
                min: "3",
                trim: true,
                optional: false
            },
            email: {
                type: "email",
                max: "255",
                min: "3",
                trim: true,
                optional: false
            },
            password: {
                type: "string",
                max: "255",
                min: "3",
                trim: true,
                optional: false
            }
        }

        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }


        const v = new Validator();

        const validate = v.validate(user, schema);

        if (validate !== true) {
            return res.status(400).json({
                message: "validation failed",
                error: validate
            })
        }
        bcryptjs.hash(req.body.password, salt, (err, hash) => {
            if (err) {
                return res.status(500).json({
                    message: "oops! failed to create user",
                    error: err
                })
            }

            user.password = hash

            models.User.create(user)
                .then((result) => {
                    res.status(201).json({
                        message: "user created successfully",
                        user: result
                    })
                })
                .catch((err) => {
                    res.status(500).json({
                        message: "oops! failed to create user",
                        error: err
                    })
                })
        })
    })

}

const login = (req, res) => {
    const schema = {
        email: {
            type: "email",
            max: "255",
            min: "3",
            trim: true,
            optional: false
        },
        password: {
            type: "string",
            max: "255",
            min: "3",
            trim: true,
            optional: false
        }
    }

    const user = {
        email: req.body.email,
        password: req.body.password
    }


    const v = new Validator();

    const validate = v.validate(user, schema);

    if (validate !== true) {
        return res.status(400).json({
            message: "validation failed",
            error: validate
        })
    }
    models.User.findOne({ where: { email: req.body.email } })
        .then(user => {
            if (!user) {
                return res.status(404).json({
                    message: "user not found"
                })
            }
            else{
                bcryptjs.compare(req.body.password, user.password, (err, result) => {
                    if (result) {
                        const token = jwt.sign({
                            email: user.email,
                            userId: user.id
                        },
                            process.env.JWT_SECRET,
                            (err, token) => {
                                res.status(200).json({
                                    message: "user logged in successfully",
                                    token
                                })
                            }
                        )
                    }
                    else {
                        return res.status(401).json({
                            message: "invalid credentials"
                        })
                    }
                })
            }
        })
        .catch(err => {
            return res.status(500).json({
                message: "oops! something went wrong",
                error: err
            })
        })
}

module.exports = {
    signUp,
    login
}

