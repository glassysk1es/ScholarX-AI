import { Plugin } from "@elizaos/core";
import { taskManagerAction } from "../actions/taskManager";

export const scholarPlugin: Plugin = {
    name: "scholar-plugin",
    description: "Plugin khusus ScholarX untuk manajemen tugas mahasiswa dan reward Solana",
    actions: [taskManagerAction], // Masukin action yang tadi lu buat di sini
    providers: [],
    evaluators: [],
};
