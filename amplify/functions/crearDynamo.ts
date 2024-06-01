import { DynamoDB } from 'aws-sdk';

const dynamodb = new DynamoDB();

// Generar un nombre aleatorio para la tabla
const tableName = `MyTable-${Math.random().toString(36).slice(2)}`; 

// Crear los parámetros para la tabla
const params = {
  TableName : tableName,
  KeySchema: [       
    { AttributeName: "id", KeyType: "HASH"}
  ],
  AttributeDefinitions: [       
    { AttributeName: "id", AttributeType: "S" }
  ],
  ProvisionedThroughput: {       
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

// Crear la tabla
dynamodb.createTable(params, (error) => {
  if (error) {
    console.error("Error creating table:", error);
  } else {
    console.log("Table created with name:", tableName);
  }
});