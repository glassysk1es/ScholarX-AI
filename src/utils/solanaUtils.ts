import { Connection, Keypair, PublicKey, LAMPORTS_PER_SOL, Transaction, SystemProgram, sendAndConfirmTransaction } from "@solana/web3.js";

// Kita pake Devnet (Uang Mainan/Gratis)
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

export const sendStudentReward = async (studentWalletAddress: string) => {
    try {
        const toPublicKey = new PublicKey(studentWalletAddress);
        
        // Di sini harusnya pake Private Key lu (disimpan di .env)
        // Untuk testing, kita buat keypair baru (tapi ini gak akan ada isinya)
        // Nanti kita bakal setup Wallet khusus buat "ScholarX Treasury"
        const fromKeypair = Keypair.generate(); 

        console.log(`Mengirim reward ke: ${studentWalletAddress}...`);
        
        // Logic: Kirim 0.01 SOL Devnet sebagai simbolis 'XP'
        // (Nanti kita ganti pake Token beneran kalau udah jago)
        return {
            success: true,
            signature: "SIMULATED_TX_SIGNATURE_ON_DEVNET",
            amount: 0.01
        };
    } catch (error) {
        console.error("Gagal kirim reward:", error);
        return { success: false, error };
    }
};
