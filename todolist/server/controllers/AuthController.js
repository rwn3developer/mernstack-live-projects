const UserModel = require('../models/UserModel');

const registerUser = async (req, res) => {
    try {

        const { name, email, password, city, contact } = req.body;
        if (!name || !email || !password || !city || !contact) {
            return res.status(400).send({
                success: false,
                message: "Please fill all the fields"
            });
        }
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send({
                success: false,
                message: "Email already exists"
            });
        }
        let user = await UserModel.create({
            name: name,
            email: email,
            password: password,
            city: city,
            contact: contact
        })
        res.status(200).send({
            success: true,
            message: "User created successfully",
            user: user
        })
    } catch (err) {
        return res.status(501).send({
            success: false,
            message: err
        })
    }
}

module.exports = {
    registerUser
}