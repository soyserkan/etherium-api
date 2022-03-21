declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number;
            PROJECT_ID:string;
        }
    }
}
export { }