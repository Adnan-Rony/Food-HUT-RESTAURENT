
const {foodname,foodpassword}=process.env


export const connectionSrt="mongodb+srv://"+foodname+":"+foodpassword+"@cluster0.gjcm0gd.mongodb.net/food-hut?retryWrites=true&w=majority"



