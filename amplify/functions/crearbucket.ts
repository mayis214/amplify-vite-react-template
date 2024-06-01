import { S3 } from 'aws-sdk';

async function createS3Bucket() {

  const s3 = new S3();

  try {
    await s3.createBucket({
      Bucket: 'my-bucket-name'
    }).promise();

    console.log('Bucket created successfully!');

  } catch (error) {
    console.error('Error creating bucket', error);  
  }

}
