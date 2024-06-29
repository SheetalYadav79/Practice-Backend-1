const userModel = require("../models/userModels");

const addUser = async (req, res) => {
    console.log("addUser Req.body => ", req.body);

    const addData = await userModel.create(req.body);
    if(addData){
        console.log("addData=>", addData);
        res.send({
            message: "User added Successfully",
            user: addData,
        });
        
    }
    else{
        res.send({
            message: "User not added",
        });
    }
};

const getUser = async (req, res) => {
    const getData = await userModel.find();
    if(getData){
        console.log("getData=>", getData);
        res.send(getData);
    }
    else{
        res.send({
            message: "User not found",
        });
    }
};

const deleteUser = async (req, res) => {
    const userId = req.body._id; 
    
    console.log("userId =>", userId);

    try {
        const deleteData = await userModel.findByIdAndDelete(userId);

        if (deleteData) {
            console.log("deleteData =>", deleteData);
            res.send({
                message: "User deleted successfully",
                user: deleteData,
            });
        } else {
            res.send({
                message: "User not found",
            });
        }
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).send({
            message: "An error occurred while deleting the user",
        });
    }
};

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const updateData = req.body;

    try {
        const updatedUser = await userModel.findByIdAndUpdate(userId, updateData, { new: true });
        console.log("updatedUser =>", updatedUser);

        if (updatedUser) {
            console.log("updatedUser =>", updatedUser);
            res.send({
                message: "User updated successfully",
                user: updatedUser,
            });
        } else {
            res.send({
                message: "User not found",
            });
        }
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).send({
            message: "An error occurred while updating the user",
        });
    }
};

module.exports = { addUser, getUser, deleteUser, updateUser };