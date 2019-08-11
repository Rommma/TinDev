module.exports = {
    store(req, resp) {
        const { username } = req.body;

        resp.json({ ok: true });
    }
};