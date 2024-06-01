import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';
//import { crearBucket } from './functions/resource';
//import { crearDynamo } from './functions/resource';

defineBackend({
  auth,
  data,
  storage,
  //functions: [crearBucket, crearDynamo],
  //crearBucket,
  //crearDynamo,
});
