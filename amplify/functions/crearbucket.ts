const aws = require('aws-sdk');

exports.handler = async (event) => {

  const s3 = new aws.S3();
  
  const bucketParams = {
    Bucket : process.env.BUCKET_NAME
  };

  try {
    const data = await s3.createBucket(bucketParams).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    }
  }

};
