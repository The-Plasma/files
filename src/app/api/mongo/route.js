import { NextResponse } from "next/server";
const { MongoClient } = require("mongodb");

export async function GET(request) {
  // Replace the uri string with your connection string.
  const uri =
    "mongodb+srv://temp:helloTemp@cluster0.luzwnrl.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('temp');
    const movies = database.collection('products');

    // Query for all documents in the collection
    const query = {};
    const cursor = movies.find(query);

    // Convert cursor to an array of documents
    const allMovies = await cursor.toArray();
    console.log(allMovies);

    return NextResponse.json({ movies: allMovies });
  } catch (error) {
    console.error("Error connecting to database", error);
    return NextResponse.json({ "error": "Error connecting to database" });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
