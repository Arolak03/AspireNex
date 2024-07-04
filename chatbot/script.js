
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("userInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() !== "") {
        addMessage(userInput, "user-message");
        document.getElementById("userInput").value = "";

        // Simulate bot response
        setTimeout(() => {
            const botResponse = getBotResponse(userInput);
            addMessage(botResponse, "bot-message");
        }, 500);
    }
}

function addMessage(message, className) {
    const chatBox = document.getElementById("chatBox");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", className);
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userInput) {
    const userMessage = userInput.toLowerCase();

    // Define rules for keyword matching
    const rules = [
        { keywords: ["hello", "hi"], response: "Hello! How can I help you today?" },
        { keywords: ["how are you", "how are you doing"], response: "I'm just a bot, but I'm doing great! How about you?" },
        { keywords: ["price", "cost", "fee"], response: "Our pricing information can be found on our website." },
        { keywords: ["support", "help", "assistance"], response: "Sure, I'm here to help. What do you need assistance with?" },
        { keywords: ["bye", "goodbye", "see you later"], response: "Goodbye! Have a great day!" }
    ];

    // Check for matching keywords
    for (let rule of rules) {
        for (let keyword of rule.keywords) {
            if (userMessage.includes(keyword)) {
                return rule.response;
            }
        }
    }

    // Default response if no keywords match
    return "I'm not sure how to respond to that. Can you please rephrase?";
}
function usePrompt(prompt) {
    document.getElementById("userInput").value = prompt;
    sendMessage();
}

