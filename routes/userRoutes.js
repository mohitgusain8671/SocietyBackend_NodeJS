const {
    AddNewUser,
    UpdateUser,
    RemoveUser,
    FetchAllUsers,
    FetchUser,
  } = require('../controllers/userController');
  
  const express = require('express');
  const user = express.Router();
  
  /**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */


  //ROUTE TO FETCH USERS
  /**
 * @swagger
 * /FetchAllUsers:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Users'
 */
user.get("/FetchAllUsers", (req, res) => {
    FetchAllUsers()
      .then((items) => {
        res.status(200).json(items);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  
  //ROUTE TO ADD USERS
  /**
 * @swagger
 * /AddNewUser:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - UserID
 *               - Username
 *               - Password
 *               - Email
 *               - RoleID
 *             properties:
 *               UserID:
 *                 type: integer  
 *               Username:
 *                 type: string
 *               Password:
 *                 type: string
 *               Email:
 *                 type: string
 *               RoleID:
 *                 type: integer
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 */
  user.post("/AddNewUser", (req, res) => {
    const {
        UserID,
        Username,
        Password,
        Email,
        RoleID
    } = req.body;
    AddNewUser(
        UserID,
        Username,
        Password,
        Email,
        RoleID
    )
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  

  //ROUTE TO UPDATE USER
  /**
 * @swagger
 * /UpdateUser/{UserID}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: UserID
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserID:
 *                 type: integer  
 *               Username:
 *                 type: string
 *               Password:
 *                 type: string
 *               Email:
 *                 type: string
 *               RoleID:
 *                 type: integer
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 *       400:
 *         description: Bad request
 */
  user.put("/UpdateUser", (req, res) => {
    const {
        UserID,
        Username,
        Password,
        Email,
        RoleID
    } = req.body;
    UpdateUser(
        UserID,
        Username,
        Password,
        Email,
        RoleID
    )
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  

  
  //ROUTE TO GET USER BY IT'S ID
  /**
 * @swagger
 * /FetchUser/{UserID}:
 *   get:
 *     summary: Get a User by its name
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: UserID
 *         required: true
 *         schema:
 *           type: integer
 *         description: UserID
 *     responses:
 *       200:
 *         description: USER details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       404:
 *         description: User not found
 */
  user.get("/FetchUser/:UserID", (req, res) => {
    console.log("Running");
    const UserID = req.params.UserID;
    FetchUser(UserID)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  
  

  //ROUTE TO DELETE A USER
  /**
 * @swagger
 * /RemoveUser/{UserID}:
 *   delete:
 *     summary: Delete a USER by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: UserID
 *         required: true
 *         schema:
 *           type: integer
 *         description: UserID
 *     responses:
 *       204:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
  user.delete("/RemoveUser/:UserID", (req, res) => {
    const UserID = req.params.UserID;
    RemoveUser(UserID)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  
  module.exports = user;

