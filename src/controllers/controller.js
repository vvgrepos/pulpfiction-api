exports.post = (req, res, next) => {
    res.status(201).send('Requirement received successfully');
};

exports.put = (req, res , next) => {
    let id = req.params.id;
    res.status(201).send('Requirement received successfully!');
}

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requirement received succesfully! ${id}`);
};