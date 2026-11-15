const calculateHr = (age:string):object => {
 const ageNum: number = !isNaN(Number(age)) ? Number(age) : 0
 const valid = ageNum > 0 && ageNum <=120

 return {
    lower: valid ? (220 - ageNum) * 0.65 : 0,
    upper: valid ? (220 - ageNum) * 0.85 : 0
 }
}

export default calculateHr