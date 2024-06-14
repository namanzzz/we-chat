export const login = async (req,res)=>{
   
}

export const logout = (req,res)=>{
    console.log('logoutUser');
}

export const signup = async (req,res)=>{
    try {
        const {fullName,username,password,confirmpassword,gender} = req.body;
    } catch (error) {

    }
}