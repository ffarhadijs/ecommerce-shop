export const shorten=(name)=>{
    const text=name.split(" ")
    const newText=`${text[0]} ${text[1]}`
    return newText
}