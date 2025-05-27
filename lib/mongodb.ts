import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in .env.local"
  );
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // Extend NodeJS.Global to include mongoose
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

const cached: MongooseCache = globalThis.mongoose || {
  conn: null,
  promise: null,
};
globalThis.mongoose = cached;

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      dbName: "visa_applications",
      bufferCommands: false, // Disable mongoose buffering
      serverSelectionTimeoutMS: 30000, // 30 seconds server selection timeout
      socketTimeoutMS: 45000, // 45 seconds socket timeout
      maxPoolSize: 10, // Maximum number of sockets in the connection pool
      minPoolSize: 2, // Minimum number of sockets in the connection pool
      heartbeatFrequencyMS: 10000, // Send a heartbeat every 10 seconds
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        return mongoose;
      })
      .catch((err) => {
        // Reset the promise on connection failure
        cached.promise = null;
        throw err;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

// Connection event handlers
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected successfully");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Close the connection when the Node process ends
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});

export default dbConnect;
