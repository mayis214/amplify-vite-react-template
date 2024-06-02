from aws_cdk import (
    Stack,
    aws_iam as iam,
    aws_bedrock as bedrock,
    RemovalPolicy
)

from amplify import storage

from constructs import Construct
from knowledge_base import KnowledgeBases
from kb_role import CreateKBRole

class CreateKnowledgebaseStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        model_arn = f"arn:aws:bedrock:{self.region}::foundation-model/amazon.titan-embed-text-v1"
        bucketArn = storage.Bucket.from_bucket_name(self, storage, storage.name).bucket_arn






        # The code that defines your stack goes here

        # example resource
        # queue = sqs.Queue(
        #     self, "CreateKnowledgebaseQueue",
        #     visibility_timeout=Duration.seconds(300),
        # )
