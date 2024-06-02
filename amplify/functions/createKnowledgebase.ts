import * as AWS from 'aws-sdk';
import { S3 } from '@aws-sdk/client-s3'
import { BedrockAgentClient, CreateKnowledgeBaseCommand } from "@aws-sdk/client-bedrock-agent"; 
import { BedrockRuntimeClient, InvokeModelCommand, InvokeModelCommandInput } from "@aws-sdk/client-bedrock-runtime";

import { fromEnv } from "@aws-sdk/credential-providers";
import { STSClient, AssumeRoleCommand } from "@aws-sdk/client-sts";
const sts = new STSClient({});

import { AwsCredentialIdentity } from "@aws-sdk/types";

//Nombre unico del bucket para knowledge base
const date = new Date();
const uniqueSuffix = date.getTime();
const bucketName = `my-bucket-${uniqueSuffix}`;

//inicializar el bucket para knowledge base
const s3 = new S3({
  region: process.env.AWS_REGION
});

//Crear el bucket para knowledge base
await s3.createBucket({Bucket: bucketName});

export async function createKnowledgeBase(roleArn: string, bucketName: string) {

// Obtenemos credenciales asumiendo rol
const assumeRoleResponse = await sts.send(new AssumeRoleCommand({
  RoleArn: roleArn,
  RoleSessionName: 'session-name' 
}));
const credentialsRole = assumeRoleResponse.Credentials;
const client = new BedrockAgentClient({ region: process.env.AWS_REGION });




  return 'Knowledge base created successfully!';

}