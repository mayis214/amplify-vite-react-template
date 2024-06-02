from aws_cdk import (
    # Duration,
    Stack,
    aws_iam as iam,
)
from constructs import Construct

class CreateKBRole(Stack):

    def __init__(self, scope: Construct, construct_id: str, _account, _region,credentialsSecretArn, model_arn,bucket_key,bucket_name, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        self.kb_service_role = iam.Role(
                self,
                "KbServiceRole",
                assumed_by=iam.ServicePrincipal("bedrock.amazonaws.com",
                conditions={
                    "StringEquals": {
                        "aws:SourceAccount": _account
                    },
                    "ArnLike": {
                        "aws:SourceArn": f"arn:aws:bedrock:{_region}:{_account}:knowledge-base/*"
                    }
                })
            )
        
        self.kb_service_role.add_to_policy(iam.PolicyStatement(
            effect=iam.Effect.ALLOW,
            actions=[
                "bedrock:InvokeModel",
            ],
            resources= [
                model_arn
            ]
            
        ),
        )
        self.kb_service_role.add_to_policy(iam.PolicyStatement(
            effect=iam.Effect.ALLOW,
            actions=[
                "secretsmanager:GetSecretValue",
            ],
            resources= [
                credentialsSecretArn
            ]
            
        ),
        )

        #https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_iam/ManagedPolicyProps.html
        
        ListBucket_policy = iam.PolicyStatement(
            effect=iam.Effect.ALLOW,
            actions=[
                "s3:ListBucket",
            ],
            resources=[
                f"arn:aws:s3:::{bucket_name}",
            ],
            conditions={
                "StringEquals": {
                    "aws:ResourceAccount": [ _account]
                }
            })
        
        self.kb_service_role.add_to_policy(ListBucket_policy)

        GetObjectStatement_policy = iam.PolicyStatement(
            effect=iam.Effect.ALLOW,
            actions=[
                "s3:S3GetObjectStatement",
            ],
            resources=[
                f"arn:aws:s3:::{bucket_name}/{bucket_key}/*",
            ],
            conditions={
                "StringEquals": {
                    "aws:ResourceAccount": [ _account]
                }
            })
        
        self.kb_service_role.add_to_policy(GetObjectStatement_policy)
        self.arn = self.kb_service_role.role_arn
        