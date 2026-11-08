export default function checkStatus(hunger: number, energy: number, mood: number): string {
    let result: string = "I'm okay"
    
    
    const avg = (hunger + energy + mood) / 3
    
    if(avg >= 8){
        result = "I'm very happy"
    }
    
    if(hunger <= 2){
        result = "I'm hungry"
    }
    
    if(energy <= 2){
        result = "I'm tired"
    }
    
    if(mood <= 2){
        result = "I'm sad"
    }
    if(hunger === 0 || energy === 0 || mood === 0){
        result = "I'm dead"
    }
    return result
    
}