/*import { Handler } from 'aws-lambda';
import { BedrockRuntimeClient, InvokeModelCommand, InvokeModelCommandInput } from "@aws-sdk/client-bedrock-runtime";
const client = new BedrockRuntimeClient({region: "us-east-1"});

export const handler: Handler = async (event, context) => {
  // your function code goes here
  const MODEL_ID = "anthropic.claude-3-sonnet-20240229-v1:0";
    const input: InvokeModelCommandInput = {
        modelId: MODEL_ID,
        contentType: "application/json", 
        accept: "application/json", 
        body:JSON.stringify({
            "anthropic_version": "bedrock-2023-05-31",
            "max_tokens": 8000,
            "temperature": 0.5,
            "messages": [
                {
                    "role": "user",
                    "content": event.queryStringParameters.text
                }
            ]
        })
    };


};
/*