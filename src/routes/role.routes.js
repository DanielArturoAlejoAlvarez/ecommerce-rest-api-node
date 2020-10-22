const router = require("express").Router();

const roleCTRL = require("../controllers/role.controller");

const { isAuth } = require("../middlewares/authentication");

router.get("/", roleCTRL.getRoles);
router.get("/:roleId", roleCTRL.getRole);
router.post("/", isAuth, roleCTRL.createRole);
router.put("/:roleId", isAuth, roleCTRL.updateRole);
router.delete("/:roleId", isAuth, roleCTRL.deleteRole);

module.exports = router;
