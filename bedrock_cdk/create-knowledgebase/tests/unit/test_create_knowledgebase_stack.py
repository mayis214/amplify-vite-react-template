import aws_cdk as core
import aws_cdk.assertions as assertions

from create_knowledgebase.create_knowledgebase_stack import CreateKnowledgebaseStack

# example tests. To run these tests, uncomment this file along with the example
# resource in create_knowledgebase/create_knowledgebase_stack.py
def test_sqs_queue_created():
    app = core.App()
    stack = CreateKnowledgebaseStack(app, "create-knowledgebase")
    template = assertions.Template.from_stack(stack)

#     template.has_resource_properties("AWS::SQS::Queue", {
#         "VisibilityTimeout": 300
#     })
