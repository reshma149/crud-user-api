const { StatusCodes } = require('http-status-codes')


let userController= {
    readAll: async (req,res) => {
        try {
            res.json({ msg: "read all" });
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false , msg: err})
        }
    },
    readSingle: async (req,res) => {
        try {
            res.json({ msg: "read single" });
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false , msg: err})
        }
    },
    createUser: async (req,res) => {
        try {
            res.json({ msg: "create user" });
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false , msg: err})
        }
    },
    updateUser: async (req,res) => {
        try {
            res.json({ msg: "update user" });
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false , msg: err})
        }
    },
    deleteUser: async (req,res) => {
        try {
            res.json({ msg: "delete user" });
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false , msg: err})
        }
    }
}

module.exports = userController;

