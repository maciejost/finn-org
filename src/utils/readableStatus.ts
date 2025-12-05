import { Status, Gender } from "../App";
 


export const readableStatus = (status: Status | Gender | undefined) => {
if (!status) return "";
    if (status === "doed") return "Død";
    const firstLetter = status.charAt(0)

    const firstLetterCap = firstLetter.toUpperCase()
    
    const remainingLetters = status.slice(1)
    
    const capitalizedStatus = firstLetterCap + remainingLetters

    return capitalizedStatus;


}