const mongoose = require('mongoose');

const mongoURI = "mongodb://0.0.0.0/iNotebook"

const connectToMongo = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Other options if needed
});
        console.log("Connected to mongoDB successfully");
    } catch (error) {
        console.log(error);
        process.exit();
    }
};
module.exports = connectToMongo; 