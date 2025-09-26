import { HfInference } from "@huggingface/inference";

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients.
You don't need to use every ingredient they mention in your recipe.
The recipe can include additional ingredients they didn't mention,
but try not to include too many extra ingredients.
Format your response in markdown to make it easier to render to a web page
Format the response in markdown with clear sections:  
  ## Recipe Name  
  ### Ingredients  
  - item 1  
  - item 2  
  ### Instructions  
  1. Step one  
  2. Step two  
`;

// const anthropic = new Anthropic({
//     apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
//     dangerouslyAllowBrowser: true, // ⚠️ browser key exposure risk
// })


// export default function getRecipeFromChefClaude(ingredientArr) {
//     const ingredientString = ingredientArr.join(", ");

//     const msg = await anthropic.messages.create({
//         model: "claude-3-haiku-20240307",
//         max_tokens: 1024,
//         system: SYSTEM_PROMPT,
//         messages: [
//             { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
//         ],
//     });
//     return msg.content[0].text;
// }

// Make sure you set an environment variable in Scrimba 
// for HF_ACCESS_TOKEN

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mistral-7B-Instruct-v0.3",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_new_tokens: 1024,
        });
        return response.choices[0].message.content
    } catch (err) {
        console.error("Error fetching recipe:", err);
        return "Sorry, I couldn’t generate a recipe right now.";
    }
}






