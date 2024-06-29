# chatbot.py

# Define rules and responses
rules = {
    "hi": "Hello! How can I help you today?",
    "how are you": "I'm doing well, thank you!",
    "bye": "Goodbye! Have a nice day.",
    "default": "I'm sorry, I didn't understand that."
}

def chatbot_response(user_input):
    # Convert user input to lowercase for case-insensitive matching
    user_input = user_input.lower()

    # Check each rule for a match
    for pattern, response in rules.items():
        if pattern in user_input:
            return response
    
    # If no matches found, return default response
    return rules["default"]
