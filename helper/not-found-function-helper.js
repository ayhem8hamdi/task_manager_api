const notFoundHelper = (task, res) => {
    if (!task) {
        res.status(404).json({ message: `The Task With This Id: Not Found` });
        return false;
    }
    return true;
};


module.exports = notFoundHelper;
