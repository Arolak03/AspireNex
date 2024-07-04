// // // Function to send user message and receive bot response
// // function sendMessage() {
// //     var userInput = document.getElementById("userInput").value;
// //     if (userInput.trim() === "") {
// //         return;
// //     }

// //     appendUserMessage(userInput);
// //     processUserInput(userInput);
// // }

// // // Function to append user message to chat box
// // function appendUserMessage(message) {
// //     var chatBox = document.getElementById("chatBox");
// //     var userMessage = '<div class="chat-message user-message"><p>' + message + '</p></div>';
// //     chatBox.innerHTML += userMessage;
// // }

// // // Function to append bot message to chat box
// // function appendBotMessage(message) {
// //     var chatBox = document.getElementById("chatBox");
// //     var botMessage = '<div class="chat-message bot-message"><p>' + message + '</p></div>';
// //     chatBox.innerHTML += botMessage;
// // }

// // // Function to process user input and generate bot response
// // function processUserInput(userInput) {
// //     var botResponse = generateBotResponse(userInput.toLowerCase());
// //     appendBotMessage(botResponse);
// // }

// // // Function to generate bot response based on user input
// // function generateBotResponse(userInput) {
// //     if (userInput.includes("hello") || userInput.includes("hi")) {
// //         return "Hello! How can I assist you today?";
// //     } else if (userInput.includes("product")) {
// //         return "Sure! What type of product are you looking for?";
// //     } else if (userInput.includes("order")) {
// //         return "Please provide your order number so I can assist you further.";
// //     } else if (userInput.includes("help")) {
// //         return "I'm here to help! How can I assist you?";
// //     } else {
// //         return "I'm sorry, I didn't quite get that. Can you please rephrase?";
// //     }
// // }

// // script.js

// document.addEventListener("DOMContentLoaded", function() {
//     const optionsContainer = document.getElementById("options");
//     const chatBox = document.getElementById("chatBox");

//     const options = [
//         { text: "Option 1", response: "You selected Option 1" },
//         { text: "Option 2", response: "You selected Option 2" },
//         { text: "Option 3", response: "You selected Option 3" }
//     ];

//     options.forEach(option => {
//         const button = document.createElement("button");
//         button.textContent = option.text;
//         button.addEventListener("click", () => {
//             addMessage(option.response, "bot-message");
//         });
//         optionsContainer.appendChild(button);
//     });

//     document.getElementById("userInput").addEventListener("keypress", function(event) {
//         if (event.key === "Enter") {
//             sendMessage();
//         }
//     });
// });

// function sendMessage() {
//     const userInput = document.getElementById("userInput").value;
//     if (userInput.trim() !== "") {
//         addMessage(userInput, "user-message");
//         document.getElementById("userInput").value = "";

//         // Simulate bot response
//         setTimeout(() => {
//             addMessage("Bot is thinking...", "bot-message");
//         }, 1000);
//     }
// }

// function addMessage(message, className) {
//     const chatBox = document.getElementById("chatBox");
//     const messageDiv = document.createElement("div");
//     messageDiv.classList.add("chat-message", className);
//     messageDiv.innerHTML = `<p>${message}</p>`;
//     chatBox.appendChild(messageDiv);
//     chatBox.scrollTop = chatBox.scrollHeight;
// }


// script.js

// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("userInput").addEventListener("keypress", function(event) {
//         if (event.key === "Enter") {
//             sendMessage();
//         }
//     });
// });
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

