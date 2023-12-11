import { View, Text,SafeAreaView,TouchableOpacity,StyleSheet,TextInput } from 'react-native'
import React, {useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { GiftedChat } from 'react-native-gifted-chat';



const ChatBot = () => {
    const [messages,setmessages]=useState([]);
    const API_KEY='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'
    const handleSend = async (newmessages=[])=>{
        try{
            // get user message
            const userMessage = newmessages[0];

            // Add th users message to the message state
            setmessages((previousMessages)=>GiftedChat.append(previousMessages,userMessage));
            const messageText=userMessage.text.toLowerCase();
            const keywords=["language","learning","speaking","english","urdu","spanish", "chinese","feedback","real-time","trnaslation","native language","native","language","translat","support","help","helpful","useful","use","want","learn","corrections"]
            if(!keywords.some(keyword=>messageText.includes(keyword))){
                // if the message does not any language keywords
                const botmessage={
                    _id:new Date().getTime()+1,
                    text:'Sorry,  I only understand language related questions',
                    createdAt:new Date(),
                    user:{
                        _id:2,
                        name:'Language Learning Bot',
                        
                    }

                };
                setmessages((previousMessages)=>GiftedChat.append(previousMessages,botmessage));
                return;
                

            
        }
        // if the message does contain language keywords
        const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions',{
            data:`i want to learn language ${messageText}`,
            max_tokens:1200,
            temperature:0.2,
            n:1,
        },{
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${API_KEY}`
            }
        });
        console.log(response.data);
        const receipe=response.data.choices[0].text.trim();
        const botmessage={
            _id:new Date().getTime()+1,
            text:receipe,
            createdAt:new Date(),
            user:{
                _id:2,
                name:'Language Learning Bot',
                
            }

        };
        setmessages((previousMessages)=>GiftedChat.append(previousMessages,botmessage));


    }catch(e){
        console.log(e);
    }

}


  return(
    <View style={{flex:1}} >
    <View style={{backgroundColor:'#F5F5F5',padding:10,alignItems:'center',justifyContent:'center',borderBottomWidth:1,marginTop:40,marginBottom:5}}>
        <Text style={{fontSize:32,fontWeight:'bold'}} >Language Learning Bot</Text>
    </View>
        <GiftedChat messages={messages} onSend={newmessages=>handleSend(newmessages)} user={{_id:1}} />
    
    </View>
        
    )



 
}


export default ChatBot