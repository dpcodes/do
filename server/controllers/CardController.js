const sanitize = require('../utils/sanitize');
const Card = require('../models/Card');

exports.update = function (req, res, next) {
    const id = req.params.id;
    const props = sanitize(req.body);

    return Card.update(id, props)
        .then(card => {
            res.status(200).json({ result: card });
        }, next);
};

exports.drop = function (req, res, next) {
    const id = req.params.id;

    return Card.drop(id)
        .then(result => {
            res.status(200).json({ result });
        }, next);
};