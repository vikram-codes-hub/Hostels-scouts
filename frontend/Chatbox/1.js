        // Sample JavaScript functionality
        function openChat(userName) {
            document.getElementById('chat-header').innerHTML = `<i class="fas fa-user"></i> ${userName}`;
            
            // Update active user in the list
            const users = document.querySelectorAll('.user');
            users.forEach(user => {
                user.classList.remove('active');
                if (user.textContent.includes(userName)) {
                    user.classList.add('active');
                }
            });
            
            // In a real app, you would load the chat history for this user
        }
        
        // Send message functionality
        document.getElementById('send-btn').addEventListener('click', sendMessage);
        document.getElementById('message-input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        function sendMessage() {
            const input = document.getElementById('message-input');
            const message = input.value.trim();
            
            if (message) {
                const chatBox = document.getElementById('chat-box');
                const now = new Date();
                const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                
                const messageElement = document.createElement('div');
                messageElement.className = 'message sent';
                messageElement.innerHTML = `${message}<span class="message-time">${timeString}</span>`;
                
                chatBox.appendChild(messageElement);
                input.value = '';
                
                // Scroll to bottom
                chatBox.scrollTop = chatBox.scrollHeight;
                
                // Show typing indicator (simulate reply)
                const typingIndicator = document.getElementById('typing-indicator');
                typingIndicator.style.display = 'flex';
                
                // Simulate reply after 1-3 seconds
                setTimeout(() => {
                    typingIndicator.style.display = 'none';
                    
                    const replies = [
                        "I'll check the availability for you.",
                        "That sounds good! What time works for you?",
                        "We have several options available.",
                        "The monthly rent includes all utilities.",
                        "Would you like to see some photos?"
                    ];
                    
                    const randomReply = replies[Math.floor(Math.random() * replies.length)];
                    const replyTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                    
                    const replyElement = document.createElement('div');
                    replyElement.className = 'message received';
                    replyElement.innerHTML = `${randomReply}<span class="message-time">${replyTime}</span>`;
                    
                    chatBox.appendChild(replyElement);
                    chatBox.scrollTop = chatBox.scrollHeight;
                }, 1000 + Math.random() * 2000);
            }
        }
        
        // Initialize with first user
        window.onload = function() {
            openChat('John Doe');
        };