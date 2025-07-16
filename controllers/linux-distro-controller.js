// SETUP
const express = require("express");
const router = express.Router();
const LinuxDistro = require("../models/linux-distro.js");

// DATA
const title = "LinDist.com";

// ROUTES
router.get("/", async (req, res) => {
        const allLinuxDistros = await LinuxDistro.find();
        res.render("./linux-distros/index.ejs", {
                title,
                allLinuxDistros,
        });
});

router.get("/new", (req, res) => {
        res.render("./linux-distros/new.ejs", {
                title,
        });
});

router.post("/", async (req, res) => {
        const formData = req.body;
        await LinuxDistro.create(formData);
        res.redirect("/linux-distros");
});

router.get("/:linuxDistroId", async (req, res) => {
        const foundLinuxDistro = await LinuxDistro.findById(req.params.linuxDistroId);
        res.render("./linux-distros/show.ejs", {
                title,
                foundLinuxDistro,
        });
});

router.delete("/:linuxDistroId", async (req, res) => {
        await LinuxDistro.findByIdAndDelete(req.params.linuxDistroId);
        res.redirect("/linux-distros");
});

router.get("/:linuxDistroId/edit", async (req, res) => {
        const foundLinuxDistro = await LinuxDistro.findById(req.params.linuxDistroId);
        res.render("./linux-distros/edit.ejs", {
                title,
                foundLinuxDistro,
        });
});

router.put("/:linuxDistroId", async (req, res) => {
        await LinuxDistro.findByIdAndUpdate(req.params.linuxDistroId, req.body);
        res.redirect(`/linux-distros/${req.params.linuxDistroId}`);
});

module.exports = router;