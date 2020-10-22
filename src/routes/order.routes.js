const router = require("express").Router();

const orderCTRL = require("../controllers/order.controller");

const { isAuth } = require("../middlewares/authentication");

router.get("/", orderCTRL.getOrders);
router.get("/:orderId", orderCTRL.getOrder);
router.post("/", isAuth, orderCTRL.createOrder);
//router.put("/:orderId", isAuth, orderCTRL.updateOrder);
router.delete("/:orderId", isAuth, orderCTRL.deleteOrder);

module.exports = router;