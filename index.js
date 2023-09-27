// Load environment variables from a .env file in the project directory
require('dotenv').config();

// Import necessary AWS SDK modules
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');

// Create an S3 client instance with AWS credentials and region
const s3 = new S3Client({
    accessKeyId: process.env.CLIENT_KEY,        // AWS Access Key ID
    secretAccessKey: process.env.CLIENT_SECRET, // AWS Secret Access Key
    region: process.env.REGION                 // AWS region
});

// Function to upload a file to an S3 bucket
async function uploadFile(filePath, bucketName, newFileNameKey) {
    // Create a readable stream from the local file
    const fileStream = fs.createReadStream(filePath);

    // Handle errors that may occur when creating the file stream
    fileStream.on('error', (err) => {
        console.error('File error: ', err);
    });

    // Define parameters for the S3 PutObject operation
    const params = new PutObjectCommand({
        Bucket: bucketName,     // Name of the S3 bucket
        Key: newFileNameKey,    // Key (filename) under which the file will be stored
        Body: fileStream,       // The file stream to upload
        ACL: 'public-read'      // Make the uploaded file publicly readable
    });

    // Send the PutObject operation to S3 and await the response
    const response = await s3.send(params);

    return response;
}

// Immediately-invoked function expression (IIFE) to upload a file when the script is run
(async () => {
    // Specify the local file to upload
    const filePath = './test.txt';

    // Generate a new unique filename based on the current date and time
    const newFileNameKey = new Date() + '.txt';

    // Call the uploadFile function with the specified parameters
    const upload = await uploadFile(filePath, process.env.BUCKET_NAME, newFileNameKey);

    // Log the response from the S3 upload operation
    console.log(upload);
})();
