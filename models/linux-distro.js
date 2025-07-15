const mongoose = require("mongoose");

const linuxDistroSchema = new mongoose.Schema({
        name: {
                type: String,
                required: true,
        },
        description: {
                type: String,
                required: true,
        },
        baseDistro: {
                type: String,
                required: true,
        },
        desktopEnvironment: {
                type: String,
                required: true,
        },
}, { timestamps: true, });

const LinuxDistro = mongoose.model("LinuxDistro", linuxDistroSchema);

module.exports = LinuxDistro;