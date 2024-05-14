import mongoose from "mongoose";
import 'dotenv/config'

const DB_CONN_STRING=process.env?.CONNECTION_STRING || 'mongodb://localhost:27017/learning_bkup'

console.log(`DB_CONN_STRING : ${DB_CONN_STRING}`);

// MongoDB connection URL
const mongoURI = DB_CONN_STRING

// Connection options
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const db_conn=async (mongoURI,options)=>{
    try {
        await mongoose.connect(mongoURI,options)
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);

		// Handle specific error conditions
		if (error.name === 'MongoNetworkError') {
			console.error('Network error occurred. Check your MongoDB server.');
		} else if (error.name === 'MongooseServerSelectionError') {
			console.error('Server selection error. Ensure'
				+ ' MongoDB is running and accessible.');
		} else {
			// Handle other types of errors
			console.error('An unexpected error occurred:', error);
		}
    }
}

db_conn(mongoURI,options)

// Handling connection events
const db = mongoose.connection;

db.on('error', (error) => {
	console.error('MongoDB connection error:', error);
});

db.once('open', () => {
	console.log('Connected to MongoDB');
});

db.on('disconnected', () => {
	console.log('Disconnected from MongoDB');
});

// Gracefully close the connection when the application exits
process.on('SIGINT', () => {
	mongoose.connection.close(() => {
		console.log('Mongoose connection is disconnected'
		+ ' due to application termination');
		process.exit(0);
	});
});

export default db