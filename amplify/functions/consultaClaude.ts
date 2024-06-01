
/*import { Handler, ConnectContactFlowEvent, LexEvent } from 'aws-lambda';
import { BedrockRuntimeClient, InvokeModelCommand, InvokeModelCommandInput } from "@aws-sdk/client-bedrock-runtime";
const client = new BedrockRuntimeClient({region: "us-east-1"});

const lambdaHandler = async (event: LexEvent, context: any) => {
    console.log(event);
    // Crea un cliente de Bedrock Runtime
    const MODEL_ID = "anthropic.claude-3-sonnet-20240229-v1:0";
    const input: InvokeModelCommandInput = {
        MODEL_ID,
        contentType: "application/json", 
        accept: "application/json", -
        body:JSON.stringify({,
            "anthropic_version": "bedrock-2023-05-31",
            "max_tokens": 8000,
            "temperature": 0.5,
            "messages": [
                {
                    "role": "user",
                    "content": [{"type": "text", "text": "Por que el cielo es azul?"}],
                }
            ],
        })
    };

    const command = new InvokeModelCommand(input);
    const response = await client.send(command);
    const responseText = JSON.parse(Buffer.from(response.body).toString('utf-8'));

  return {
    statusCode: 200,
    body: responseText
  };


export { lambdaHandler };
*/