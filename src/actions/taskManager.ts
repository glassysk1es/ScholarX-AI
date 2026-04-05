import { Action, IAgentRuntime, Memory, State } from "@elizaos/core";
import { sendStudentReward } from "../utils/solanaUtils";

export const taskManagerAction: Action = {
    name: "MANAGE_TASK",
    similes: ["ADD_TASK", "REMEMBER_TASK", "COMPLETE_TASK"],
    description: "Mencatat tugas kuliah baru atau menandai tugas yang sudah selesai.",
    validate: async (runtime: IAgentRuntime, message: Memory) => {
        // Cek apakah pesan mengandung kata kunci tugas
        const keywords = ["tugas", "assignment", "deadline", "selesai", "done"];
        return keywords.some(k => message.content.text.toLowerCase().includes(k));
    },
    handler: async (runtime: IAgentRuntime, message: Memory, state: State) => {
        const text = message.content.text.toLowerCase();
        
        if (text.includes("selesai") || text.includes("done")) {
            // Ganti "YOUR_SOLANA_WALLET_ADDRESS" dengan wallet Solana lu buat testing
            const mockWallet = "YOUR_SOLANA_WALLET_ADDRESS"; 
            
            const reward = await sendStudentReward(mockWallet);
            
            return { 
                text: `Wih gokil! Tugas lu kelar. Reward 0.01 XP udah dikirim ke wallet lu! Signature: ${reward.signature} ✅` 
            };
        } else {
            // Logika Nambah Tugas
            return { 
                text: "Oke, tugas baru udah masuk daftar 'Study-to-Earn' gue. Fokus ngerjainnya ya, jangan distraco! 📚" 
            };
        }
    },
    examples: [
        [
            { user: "{{user1}}", content: { text: "X, gue ada tugas Kalkulus deadline besok." } },
            { user: "ScholarX", content: { text: "Oke, tugas Kalkulus udah masuk daftar. Semangat!" }, action: "MANAGE_TASK" }
        ],
        [
            { user: "{{user1}}", content: { text: "Tugas Fisika gue udah selesai nih!" } },
            { user: "ScholarX", content: { text: "Wih gokil! Tugas lu kelar. Reward 0.01 XP udah dikirim ke wallet lu! Signature: SIMULATED_TX ✅" }, action: "MANAGE_TASK" }
        ]
    ]
};
