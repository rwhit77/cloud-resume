import boto3
import json

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('visitor_count')

def lambda_handler(event, context):
    query_params = event.get('queryStringParameters') or {}
    counter_type = query_params.get('type', 'visits')

    response = table.update_item(
        Key={'id': counter_type},
        UpdateExpression='SET #c = if_not_exists(#c, :start) + :inc',
        ExpressionAttributeNames={'#c': 'count'},
        ExpressionAttributeValues={':inc': 1, ':start': 0},
        ReturnValues='UPDATED_NEW'
    )

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'count': int(response['Attributes']['count'])})
    }
