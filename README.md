# AWS S3 File Upload

This Node.js project demonstrates how to upload a file to an Amazon S3 bucket using the AWS SDK for JavaScript.

## Prerequisites

Before running this project, make sure you have the following:

- Node.js installed on your machine
- AWS account with access credentials (Access Key ID and Secret Access Key)
- An existing S3 bucket on AWS
- A `.env` file with the following environment variables:
  - `CLIENT_KEY`: Your AWS Access Key ID
  - `CLIENT_SECRET`: Your AWS Secret Access Key
  - `REGION`: The AWS region where your S3 bucket is located
  - `BUCKET_NAME`: The name of the S3 bucket where you want to upload the file

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/adanzweig/nodejs-aws-s3.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nodejs-aws-s3
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage

1. Ensure that your `.env` file contains the required environment variables mentioned in the Prerequisites section.

2. Place the file you want to upload to S3 in the project directory and update the `filePath` variable in `index.js` to point to the correct file.

3. Run the project:

   ```bash
   node index.js
   ```

   This will upload the specified file to the S3 bucket with a unique name based on the current date and time.

4. Check the console output for the upload response, which will include information about the uploaded file.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- [AWS SDK for JavaScript](https://github.com/aws/aws-sdk-js): Official AWS SDK for JavaScript, which is used for interacting with AWS services.
- [dotenv](https://www.npmjs.com/package/dotenv): A module for loading environment variables from a .env file into `process.env`.
