# Documentation
General tips and tricks can be found [here](https://developer.amazon.com/blogs/alexa/post/42a69522-ea56-4ad3-ae8b-8bfa24258491/4-tips-for-implementing-device-discovery-in-your-smart-home-skills).

# Discovery
Discovery process. It starts only when clicking DISABLE SKILL and then ENABLE SKILL. 
There is also the Alexa console in the browser: <https://alexa.amazon.com/spa/index.html#appliances>. 
It shows a button at the bottom, that is labelled "Discover". 
This means you can much faster iterate then on the smartphone app, where you have disable/enable.

# Region
Note, that your developer account needs to be in the same region as your Amazon account. 
You can adjust it in your - normal - Amazon account at <https://www.amazon.com/hz/mycd/myx#/home/settings/country#country>. 
I'm not responsible for shipping to the wrong address if you forget to adjust the country afterwards. 
Mine is set to the US although my brother doesn't live there anymore.

# Multiple lambdas
Currently, there are lambdas for the US and the EU (not for the far east). They can be found at:

    arn:aws:lambda:us-east-1:OBSCURED:function:crownstoneLambdaUS
    arn:aws:lambda:eu-west-1:OBSCURED:function:crownstoneLambdaEU

The first is located at North Virgina, the second in Ireland.

# Monitoring
The default monitor as well as the Cloudwatch monitor can be found at the following links:

* <https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions/crownstoneLambdaUS?tab=monitoring>
* <https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#logStream:group=%252Faws%252Flambda%252FcrownstoneLambdaUS>

For the EU version as well:

* <https://eu-west-1.console.aws.amazon.com/lambda/home?region=eu-west-1#/functions/crownstoneLambdaEU?tab=monitoring>
* <https://eu-west-1.console.aws.amazon.com/cloudwatch/home?region=eu-west-1#logStream:group=%252Faws%252Flambda%252FcrownstoneLambdaEU>

Note, that Cloudwatch logs are also regional. Don't look in the wrong one.

# Bugs
I have not found a proper way to debug json syntax etc. For now if I can do a discovery process at https://alexa.amazon.com/spa/index.html#appliances I'm assuming it is going well. The latest bug was probably a friendlyDescription rather than description field in json, see <https://github.com/crownstone/crownstone-alexa>.
