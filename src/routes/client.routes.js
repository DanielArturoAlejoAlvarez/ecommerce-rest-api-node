const router = require("express").Router();

const clientCTRL = require("../controllers/client.controller");

const { isAuth } = require("../middlewares/authentication");

router.get("/", clientCTRL.getClients);
router.get("/:clientId", clientCTRL.getClient);
router.post("/", isAuth, clientCTRL.createClient);
router.put("/:clientId", isAuth, clientCTRL.updateClient);
router.delete("/:clientId", isAuth, clientCTRL.deleteClient);

module.exports = router;
