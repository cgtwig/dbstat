// OPTIONAL: Can be used or dropped, wont effect any core features. This is currently implemented as one of the tab areas at the bottom of the page. Plans are to build this into a tool that can diagnose problems about the system in real time. 

import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();
const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey });
export default async function getSecurityCommands() {
 try {
   if (!apiKey) {
     console.error("OpenAI API key is not set in the environment variables.");
     return [];
   }
   
   const prompt = `Generate a list of 5 random but critical lesser known macOS (13.0+) security commands. Return only a JSON array with no comments where each object has 'name' (short description), 'description' (detailed explanation), and 'command' fields. For example: [{"name": "Check firewall status", "description": "Displays the current state of the built-in macOS application firewall, showing whether it's enabled or disabled and its current configuration", "command": "sudo /usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate"}]`;
   const completion = await openai.chat.completions.create({
     model: "gpt-4o-mini",
     messages: [{ role: "user", content: prompt }],
     temperature: 0.7,
     max_tokens: 1500
   });
   const assistantMessage = completion.choices[0].message.content.trim();
   const jsonMatch = assistantMessage.match(/\[[\s\S]*\]/);
   
   if (jsonMatch) {
     try {
       const commands = JSON.parse(jsonMatch[0]);
       return commands.filter(cmd => 
         cmd && 
         typeof cmd === 'object' && 
         typeof cmd.name === 'string' && 
         typeof cmd.description === 'string' && 
         typeof cmd.command === 'string'
       );
     } catch (parseError) {
       console.error('Error parsing JSON:', parseError);
       console.error('Matched content:', jsonMatch[0]);
       return [];
     }
   }
   console.error('No valid JSON array found in response');
   console.error('Full response:', assistantMessage);
   return [];
   
 } catch (error) {
   console.error('OpenAI Error:', error);
   return [];
 }
}
