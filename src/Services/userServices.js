import * as httpRequest from '~/ultils/httpRequest';
import authHeader from '~/Services/auth-header'

export const getSuggested = async ({page  , perPage }) =>{
    try {
        const res = await  httpRequest.get('/users/suggested',
        {
            headers: authHeader() ,
            params:{
                page ,
                per_page : perPage ,
            }

        });

        return res.data

        
    } catch (error) {
            console.log(error);
    }
}
export const userRegister = async (data) =>{
    try {
        const res = await  httpRequest.post('auth/register',
        {
           type :'email' ,
           email : data.email ,
           password : data.password ,

        });
        return res.data       
    } catch (error) {
            console.log(error);
            return {
                message : "email đã tồn tại"
            }
    }
    
    
}
export const userLogin = async (data) =>{
    try {
        const res = await  httpRequest.post('auth/login',
        {
            email : data.email,
           password : data.password ,

        });
        if(res){
            localStorage.setItem("user",res.meta.token )
        }
        return res.data       
    } catch (error) {
            console.log(error);
            return {
                message : "lỗi rồi"
            }
    }
    
    
}
export const userVideo = async ({type , page}) =>{
    try {
        const res = await  httpRequest.get('videos',
        {
            headers: authHeader() ,
            params:{
                type ,
                page
             
            }

        });
        return res.data       
    } catch (error) {
            console.log(error);
            return {
                message : "lỗi rồi"
            }
    }
    
    
}
export const userLike = async ({type , page}) =>{
    try {
        const res = await  httpRequest.get('videos',
        {
            params:{
                type ,
                page
             
            }

        });
        return res.data       
    } catch (error) {
            console.log(error);
            return {
                message : "lỗi rồi"
            }
    }
    
    
}
export const getInfoUser = async ({type , page}) =>{
    try {
        const res = await  httpRequest.get(`users/${type}`,{
        
                headers: authHeader()
        }
                
                )

        return res.data       
    } catch (error) {
            console.log(error);
            return {
                message : "lỗi rồi"
            }
    }
    
    
}
export const userFollow = async ({id , accessToken} ) =>{
    try {
        return await httpRequest.post(`users/${id}/follow`, [], {
            headers: authHeader()
           
          })    
    } catch (error) {
            console.log(error);
            return {
                message : "lỗi rồi"
            }
    }
    
    
}
export const userUnFollow = async ({id , accessToken} ) =>{
    try {
        return await httpRequest.post(`users/${id}/unfollow`, [], {
            headers: authHeader()
           
          })    
    } catch (error) {
            console.log(error);
            return {
                message : "lỗi rồi"
            }
    }
    
    
}
export const userUpload = async ({data} ) =>{
    try {
        return await httpRequest.post(`videos`,{
            description : data.description ,
            upload_file : data.file ,
            thumbnail_time : 2 ,
            viewable : 'public' ,
        
        }, {
            headers: authHeader()
           
          })    
    } catch (error) {
            console.log(error);
            return {
                message : "lỗi rồi"
            }
    }
    
    
}
export const userListFollow =  async({page}) =>{
    try {
        return await httpRequest.get('me/followings',{
            headers: authHeader() ,
            params:{
                page ,

            }

        });

        
    } catch (e) {
        console.log(e);
        return {
            message : "lỗi rồi"
        }
}
        
    }
    export const createVideo =  async(data) =>{
        try {
            console.log('send' , data.upload_file);
            return await httpRequest.post('/videos',
            {
                description : '123234' ,
                music : '13245554566' ,
                upload_file : data.upload_file ,
                thumbnail_time : data.thumbnail_time ,
                viewable : 'public' 
            },{
                headers: authHeader() 
            });
    
            
        } catch (e) {
            console.log(e);
            return {
                message : "lỗi rồi"
            }
    }
            
        }