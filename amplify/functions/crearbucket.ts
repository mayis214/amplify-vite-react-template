import { S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

async function createS3Bucket() {

  const uniqueId = uuidv4();

  const bucketName = `knowledgebase-${uniqueId}`;

  const s3 = new S3();

  try {
    await s3.createBucket({
      Bucket: bucketName
    }).promise();

    console.log('Bucket created successfully!', bucketName);

  } catch (error) {
    console.error('Error creating bucket', error);
  }

}
