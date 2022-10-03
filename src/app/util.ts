export class Util {
    static scrollIntoView(id: string, delayMs: number = 0): void {
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }, delayMs);
    }
}