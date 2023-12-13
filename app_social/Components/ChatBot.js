import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { GiftedChat } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use a different icon library




const ChatBot = () => {
    const navigation = useNavigation();
    const [messages, setmessages] = useState([]);
    const API_KEY = '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';

    const handleSend = async (newmessages = []) => {
        try {
            // get user message
            const userMessage = newmessages[0];

            // Add the user's message to the message state
            setmessages(previousMessages => GiftedChat.append(previousMessages, userMessage));
            const messageText = userMessage.text.toLowerCase();

            // Custom question-answer pairs
            const customQuestions = {
                'what is your name?': 'I am Language Learning Bot.',
                'how can i learn spanish?': 'To learn Spanish, you can start by practicing basic phrases and vocabulary. You may also consider taking language classes or using language learning apps.',
                // Add more custom questions and answers as needed
            };

            console.log('User Message:', userMessage);
            console.log('Message Text:', messageText);

            // Check if the user's message matches a custom question
            if (messageText in customQuestions) {
                const customAnswer = customQuestions[messageText];

                console.log('Custom Answer:', customAnswer);

                const botmessage = {
                    _id: new Date().getTime() + 1,
                    text: customAnswer,
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'Language Learning Bot',
                    }
                };

                setmessages(previousMessages => GiftedChat.append(previousMessages, botmessage));
                return;
            }

            // If the message does not match a custom question, proceed with OpenAI API request
            const response = await axios.post('https://api.openai.com/v1/completions', {
                prompt: `I want to learn language ${messageText}`,
                max_tokens: 1200,
                temperature: 0.5,
                n: 1,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                }
            });

            console.log('Response from OpenAI API:', response.data);

            const receipe = response.data.choices[0].text.trim();
            const botmessage = {
                _id: new Date().getTime() + 1,
                text: receipe,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'Language Learning Bot',
                }
            };

            setmessages(previousMessages => GiftedChat.append(previousMessages, botmessage));
        } catch (e) {
            console.log('Error:', e);
        }
    };




    return (
        <View style={{ flex: 1 }} >
            <View style={{ backgroundColor: '#4D4FA7', padding: 10, alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, height: 90, marginBottom: 5, flexDirection: 'row' }}>
                <Icon name="reddit" size={24} color="black" style={styles.icon2} />

                <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }} >Language Learning </Text>
                <Icon name="slideshare" size={24} color="black" style={styles.icon2} />

            </View>
            <GiftedChat messages={messages} onSend={newmessages => handleSend(newmessages)} user={{ _id: 1 }} />

        </View>

    )




}
const styles = StyleSheet.create({
})


export default ChatBot