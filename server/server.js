import express from "express"
import { MongoClient, ObjectId } from "mongodb"
import dotenv from "dotenv"
import cors from "cors"
import { rateLimit } from "express-rate-limit"
import helmet from "helmet"

dotenv.config()
const url = process.env.MONGO_DB_URL
const dbName = process.env.MONGO_DB
const collectionName = process.env.MONGO_DB_COLLECTION
const userCollection = process.env.MONGO_DB_USER_COLLECTION

const app = express()
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // max 100 requests per windowMs
})

app.use(cors())
app.use(limiter)
app.use(helmet)
app.use(express.json())
const PORT = 3000

app.get("/api/products", async (req, res) => {
	try {
		const client = await MongoClient.connect(url)
		const db = client.db(dbName)
		const collection = db.collection(collectionName)
		const plushies = await collection.find({}).toArray()
		res.json(plushies)
	} catch (err) {
		console.error("Error:", err)
		res.status(500).send("Hmm, something is up...no plushies for you")
	}
})

// /api/proudcts/:id GET get specific product
app.get("/api/products/:id", async (req, res) => {
	try {
		const { id } = req.params
		const client = await MongoClient.connect(url)
		const db = client.db(dbName)
		const collection = db.collection(collectionName)
		const plushieById = await collection
			.find({ _id: new ObjectId(id) })
			.toArray()
		res.json(plushieById)
	} catch (err) {
		console.error("Error:", err)
		res.status(500).send("Hmm, something is up...no plushie for you")
	}
})

// /api/products/category/:category GET get products from a specific category
app.get("/api/products/category/:category", async (req, res) => {
	try {
		const { category } = req.params
		const client = await MongoClient.connect(url)
		const db = client.db(dbName)
		const collection = db.collection(collectionName)
		const plushiesByCategory = await collection
			.find({ "plushieDetails.category": category })
			.toArray()
		res.json(plushiesByCategory)
	} catch (err) {
		console.error("Error:", err)
		res.status(500).send("Hmm, something is up...no plushies for you")
	}
})

// /api/search GET
app.get("/api/search/:search", async (req, res) => {
	try {
		const { search } = req.params

		const client = await MongoClient.connect(url)
		const db = client.db(dbName)
    const collection = db.collection(collectionName)
		const regex = new RegExp(RegExp.escape(search), "i") // Create a case-insensitive regular expression
		const products = await collection
			.find({ "plushieDetails.title": { $regex: regex } })
			.toArray()
		res.json(products)
	} catch (err) {
		console.error("Error:", err)
		res.status(500).send("Unable to search")
	}
})

// /api/users/ POST make new account
app.post("/api/users", async (req, res) => {
	try {
		const newUser = req.body
		const client = await MongoClient.connect(url)
		const db = client.db(dbName)
		const collection = db.collection(userCollection)
		// TO DO: verify username is unique/not previously taken

		const result = await collection.insertOne(newUser)
		res.status(201).send(`{"_id":"${result.insertedId}"}`)
	} catch (err) {
		console.error("Error:", err)
		res.status(500).send("Unable to add")
	}
})

// app.get("/api/users/:username", async (req, res) => {
//   try {
//     const username = req.params
//     const client = await MongoClient.connect(url)
// 		const db = client.db(dbName)
//     const collection = db.collection(userCollection)

//     const result = await collection.find({ "username": username })
//     res.json(result)
//   } catch (err) {
//     console.error("Error:", err)
//     res.status(500).send(err.message)
//   }
// })

// /api/cart GET retrieve users cart
app.get("/api/cart", async (req, res) => {
	try {
		const client = await MongoClient.connect(url)
		const db = client.db(dbName)
		const collection = db.collection("cart")
		const userCart = await collection.find({}).toArray()
		res.json(userCart)
	} catch (err) {
		console.error("Error:", err)
		res.status(500).send("Hmm, something is up...no plushies for you")
	}
})

// POST TO CART
app.post("api/cart", async (req, res) => {
	try {
		const newCart = req.body
		const client = await MongoClient.connect(url)
		const db = client.db(dbName)
		const collection = db.collection("cart")
		const result = await collection.insertOne(newCart)
		res.status(201).send(`{"_id":"${result.insertedId}"}`)
	} catch (err) {
		console.error("Error:", err)
		res
			.status(500)
			.send("Ummm, something went wrong...plushie not added to cart")
	}
})

// /api/orders POST create an order
app.post("/api/orders", async (req, res) => {
	try {
		const order = req.body
		const client = await MongoClient.connect(url)
		const db = client.db(dbName)
		const collection = db.collection("orders")
		const result = await collection.insertOne(order)
		res.status(201).send(`{"_id":"${result.insertedId}"}`)
	} catch (err) {
		console.error("Error:", err)
		res.status(500).send("Ooops, something went wrong...order not placed")
	}
})

// /api/login POST login
app.post("/api/login", async (req, res) => {
	try {
		console.log(req.body)
		const { username, password } = req.body
		const client = await MongoClient.connect(url)
		const db = client.db(dbName)
		const collection = db.collection("users")
		const result = await collection.findOne({ username: { $eq: username } })
		if (result && result.password === password) {
			res.json(result)
		}
	} catch (err) {
		console.error("Error:", err)
		res.status(500).send("Ooops, no username found")
	}
})

app.listen(PORT)
