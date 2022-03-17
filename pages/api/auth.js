import store from "../../store";

export default function handler(req, res) {
    if(req.query.code) {
        store.requestAccessToken(req.query.code).then(() => {
            store.requestUser()
        })
    }

    res.redirect(200, '/')
}