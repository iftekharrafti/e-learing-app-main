const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const port = process.env.PORT || 5000;

// Create experss app
require("dotenv").config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Mongodb uri and connect mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ts3db.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    // Create Collection
    const database = client.db("eLearningApp");
    const courses = database.collection("courses");
    const instructors = database.collection("instructors");
    const users = database.collection("users");
    const notices = database.collection("notices");

    // All Courses Get from the database
    app.get("/courses", async (req, res) => {
      const query = {};
      const options = await courses.find(query).toArray();
      res.send(options);
    });

    // Limited Courses get from the database
    app.get("/courses/home", async (req, res) => {
      const query = {};
      const options = await courses.find(query).limit(6).toArray();
      res.send(options);
    });

    // Single course get
    app.get("/course/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = await courses.findOne(query);
      res.send(options);
    });

    // Course Delete
    app.delete("/course/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id)}
      const options = await courses.deleteOne(query);
      res.send(options);
    })

    // Course post
    app.post('/courses', async (req, res) =>{
      const course = req.body;
      console.log(course)
      const result = await courses.insertOne(course);
      res.send(result);
    })

    // All Instructors get from the database
    app.get("/instructors", async (req, res) => {
      const query = {};
      const options = await instructors.find(query).toArray();
      res.send(options);
    });

    // Limited Instructors get from the database
    app.get("/instructors/home", async (req, res) => {
      const query = {};
      const options = await instructors.find(query).limit(4).toArray();
      res.send(options);
    });

    // Single Instructor get
    app.get("/instructor/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = await instructors.findOne(query);
      res.send(options);
    });

    // Instructor add
    app.post("/instructors", async(req, res) => {
      const instructor = req.body;
      const result = await instructors.insertOne(instructor);
      res.send(result);
    })

    // All user get
    app.get("/users", async (req, res) => {
      const query = {};
      const options = await users.find(query).toArray();
      res.send(options);
    });

    // single user get
    app.get("/users/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const user = await users.findOne(query);
      res.send(user);
    });

    // User as a admin or not
    app.get("/users/admin/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const user = await users.findOne(query);
      res.send({isAdmin: user?.role === 'admin'});
    });

    // User post
    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await users.insertOne(user);
      res.send(result);
    });

    // User update
    app.put("/users/admin/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          role: "admin",
        },
      };

      const result = await users.updateOne(filter, updatedDoc, options);
      res.send(result);
    });

    // Notices
    app.get('/notices', async (req, res) => {
      const query = {}
      const result = await notices.find(query).toArray();
      res.send(result);
    })

    // Recent notices
    app.get('/notices/recentNotice', async (req, res) => {
      const result = await notices.find().sort({date: -1}).limit(3).toArray(function(err,docs){
        if(err) throw err

        return docs
      })
      res.send(result)
    })


    // Notice get by id
    app.get('/notices/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await notices.findOne(query);
      res.send(result);
    })
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server runnning Successful");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
