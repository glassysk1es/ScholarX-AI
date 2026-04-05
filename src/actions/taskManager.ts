import { Action, IAgentRuntime, Memory, State } from "@elizaos/core";

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
            // Logika Verifikasi Selesai (Trigger Solana Reward nanti di sini)
            return { 
                text: "Wih gokil! Tugas lu udah kelar? Gue catet ya. Bentar, gue proses reward XP on-chain lu di Solana... ✅" 
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
            { user: "{{user2}}", content: { text: "Oke, tugas Kalkulus udah masuk daftar. Semangat!" }, action: "MANAGE_TASK" }
        ]
    ]
};
