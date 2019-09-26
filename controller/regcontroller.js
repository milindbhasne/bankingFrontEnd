const model = require('../model/CustomerModel')
const joi = require('joi')

exports.get = (req, res) => {
    let query = req.query
    const schema = {
        firstName: joi.string().required(),
        lasttName: joi.string().required(),
        username: joi.string().required().unique(),
        address1:joi.string().required(),
        address2:joi.string().required(),
        address3:joi.string().required(),
        email: joi.string().email(),
        city:joi.string().required(),
        state:joi.string().required(),
        pin:joi.string().required(),
        phone: joi.string().length(10).required()

    };
    console.log(schema.name);
    const { error } = joi.validate(query, schema);
    if (error) {
        res.status(400)
        res.send(error)

    }
    else {
        model.findAll(req.query)
            .then((result) => {
                res.status(200)
                res.send(result)
            })
            .catch((e) => {
                res.send(e)
            })
    }
}

exports.create = (req, res) => {
    let body = req.body
    const schema = {
        firstName: joi.string().required(),
        lasttName: joi.string().required(),
        username: joi.string().required().unique(),
        address1:joi.string().required(),
        address2:joi.string().required(),
        address3:joi.string().required(),
        email: joi.string().email(),
        city:joi.string().required(),
        state:joi.string().required(),
        pin:joi.string().required(),
        phone: joi.string().length(10).required()
    };
    const { error } = joi.validate(body, schema);
    if (error) {
        res.status(400)
        res.send(error)

    }
    else {
        model.insertData(body)
            .then((response) => {
                res.status(200);
                res.send(response)
            })
            .catch((err) => {
                res.status(500);
                res.send(err)
            })
    }
}

exports.update = (req, res) => {
    const paramsSchema = {
        email: joi.string().email().required(),
    }
    const { error } = joi.validate(req.params, paramsSchema);
    if (error) {
        res.status(400)
        res.send(error)
    } else {
        let body = req.body
        const schema = {
            number: joi.string().length(10),
            name: joi.string(),
        };
        const { error } = joi.validate(body, schema);
        if (error) {
            res.status(400)
            res.send(error)
        }
        else {
            model.updateData(req.params ,req.body)
                .then((response) => {
                    res.status(200);
                    res.send(response)
                })
                .catch((err) => {
                    res.status(400);
                    res.send(err)
                })
        }
    }
}

exports.remove = (req, res) => {
    const paramsSchema = {
        email: joi.string().email().required(),
    }
    const { error } = joi.validate(req.params, paramsSchema);
    if (error) {
        res.status(400)
        res.send(error)
    } else {
        model.removeData(req.params)
            .then((response) => {
                res.status(200);
                res.send(response)
            })
            .catch((err) => {
                res.status(400);
                res.send(err)
            })
    }
}

