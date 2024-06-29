from chatbot import chatbot_response

def main():
    print("Welcome to the Simple Chatbot!")
    print("Enter 'bye' to exit.\n")

    while True:
        user_input = input("You: ")
        
        if user_input.lower() == 'bye':
            print(chatbot_response(user_input))
            break
        
        response = chatbot_response(user_input)
        print(f"Bot: {response}")

if __name__ == "__main__":
    main()
