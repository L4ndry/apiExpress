# API EXPRESS-PRISMA NODE

## COMMANDS

### INITIALIZATION OF NODE PROJECT

**npm init** To initialiaze you node project

### INSTALATION OF MODULES

**npm i express** install express

**npm i body-parser** install bodyParser

### PRISMA

**npx prisma init** to create all the prisma utils(prisma/schema.prisma).

**npx prisma migrate fileName [--name init]** to migrate while creating your database

**npx prisma generate** use prisma/client to load the .env variables

## CODE

### CONTROLLERS

Start by requiring prismaClient from utils folder

```javascript
const prisma = require("../utils/prismaClient");
```

and create all the controllers for your end points

```javascript
exports.verbModelname = async (req, res) => {
  try {
    //code
  } catch {
    res.status(500).json({
      error: e,
    });
  }
};
```

### ROUTES

Require express and use the express method Router() and export it as a module.
Require the controllers file you created from the controllers folder

```javascript
const prisma = require("express");

const router = express.Router();

const tableControllers = require("./controllers/tableControllers");

router.get('/',tableControllers.verbModelName);

module.exports = router;
```
