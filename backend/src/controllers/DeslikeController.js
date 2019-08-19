const Dev = require('../models/Dev');

module.exports = {
    async store(req, resp) {

        const { devId } = req.params;
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if (!targetDev) {
            return resp.status(400).json({ error: 'Dev not exists' }); //erro
        }

        loggedDev.deslikes.push(targetDev._id);

        await loggedDev.save(); //salvar no banco

        return resp.json(loggedDev);
    }
};