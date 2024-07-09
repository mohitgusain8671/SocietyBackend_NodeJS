const {
    FetchAllRoles,
    AddNewRole,
    UpdateRole,
    FetchRole,
    RemoveRole,
  } = require('../controllers/rolesController');
  
  const express = require('express');
  const role = express.Router();
  
  /**
 * @swagger
 * tags:
 *   name: Roles
 *   description: Role management
 */


  //ROUTE TO FETCH ROLES
  /**
 * @swagger
 * /FetchAllRoles:
 *   get:
 *     summary: Get all roles
 *     tags: [Roles]
 *     responses:
 *       200:
 *         description: A list of roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Roles'
 */
role.get("/FetchAllRoles", (req, res) => {
    FetchAllRoles()
      .then((items) => {
        res.status(200).json(items);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  
  //ROUTE TO ADD ROLES
  /**
 * @swagger
 * /AddNewRole:
 *   post:
 *     summary: Create a new role
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - RoleID
 *               - Rolename
 *               - LastDateToApply
 *               - Responsibilities
 *               - LinkBySociety
 *             properties:
 *               RoleID:
 *                 type: integer
 *               Rolename:
 *                 type: string
 *               LastDateToApply:
 *                 type: string
 *               Responsibilities:
 *                 type: string
 *               LinkBySociety:
 *                 type: string
 *     responses:
 *       201:
 *         description: Role created successfully
 *       400:
 *         description: Bad request
 */
  role.post("/AddNewRole", (req, res) => {
    const {
        RoleID,
        Rolename,
        LastDateToApply,
        Responsibilities,
        LinkBySociety,
    } = req.body;
    AddNewRole(
        RoleID,
        Rolename,
        LastDateToApply,
        Responsibilities,
        LinkBySociety,
    )
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  

  //ROUTE TO UPDATE ROLE
  /**
 * @swagger
 * /UpdateRole/{RoleID}:
 *   put:
 *     summary: Update a role by ID
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: RoleID
 *         required: true
 *         schema:
 *           type: integer
 *         description: Role ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               RoleID:
 *                 type: integer
 *               Rolename:
 *                 type: string
 *               LastDateToApply:
 *                 type: string
 *               Responsibilities:
 *                 type: string
 *               LinkBySociety:
 *                 type: string
 *     responses:
 *       200:
 *         description: Role updated successfully
 *       404:
 *         description: Role not found
 *       400:
 *         description: Bad request
 */
  role.put('/UpdateRole', (req, res) => {
    const {
      RoleID,
      Rolename,
      LastDateToApply,
      Responsibilities,
      LinkBySociety,
    } = req.body;
    UpdateRole(
      RoleID,
      Rolename,
      LastDateToApply,
      Responsibilities,
      LinkBySociety
    )
      .then((item) => {
        if (item.error) {
          res.status(400).json(item);
        } else {
          res.status(200).json(item);
        }
      })
      .catch((err) => {
        res.status(500).json({ error: 'Internal Server Error', details: err.message });
      });
  });
  

  
  //ROUTE TO GET STUDENT BY ROLE NAME
  /**
 * @swagger
 * /FetchRole/{Rolename}:
 *   get:
 *     summary: Get a role by its name
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: Rolename
 *         required: true
 *         schema:
 *           type: string
 *         description: Rolename
 *     responses:
 *       200:
 *         description: Role details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Roles'
 *       404:
 *         description: Role not found
 */
  role.get("/FetchRole/:Rolename", (req, res) => {
    console.log("Running");
    const Rolename = req.params.Rolename;
    FetchRole(Rolename)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  
  

  //ROUTE TO DELETE A ROLE
  /**
 * @swagger
 * /RemoveRole/{Rolename}:
 *   delete:
 *     summary: Delete a role by name
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: Rolename
 *         required: true
 *         schema:
 *           type: string
 *         description: Rolename
 *     responses:
 *       204:
 *         description: Role deleted successfully
 *       404:
 *         description: Role not found
 */
  role.delete("/RemoveRole/:Rolename", (req, res) => {
    const Rolename = req.params.Rolename;
    RemoveRole(Rolename)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  
  module.exports = role;
