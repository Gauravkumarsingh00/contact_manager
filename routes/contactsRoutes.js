const express =  require("express");
const router= express.Router();
const {getContacts,createcontact ,getContact ,updateContact,deleteContact} = require("../controlers/contactcontroler");
const validateToken = require("../middleware/validateTokenHandler");


router.use(validateToken);
router.route("/").get(getContacts);

router.route("/").post(createcontact);

router.route("/:id").put(updateContact);

router.route("/:id").get(getContact);

router.route("/:id").delete(deleteContact);




module.exports =router;