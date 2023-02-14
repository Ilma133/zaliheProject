import React , {useState} from 'react'
import axios from "axios";
import korisnik from '../../../server/schema/korisnikshema';
const Register = () => {
    const [korisnik,setUser] = useState({
        KorisnickoIme:"",
        Sifra:""
    })
    const handleChange = e =>{
    const {KorisnickoIme,value} = e.target
    setUser({
    ...KorisnickoIme,//spread operator 
    [KorisnickoIme]:value
    })
    }
//register function 
   const egister = ()=>{
   const {KorisnickoIme,Sifra} = korisnik
   if (KorisnickoIme && Sifra){
    axios.post("http://localhost:8000/register",korisnik )
    .then(res=>console.log(res))
   }
   else{
       alert("invalid input")
   };
    return (
        <>    
<div class="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
    <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
        Create a new account
    </div>
    <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
        Already have an account ?
        <a href="#" target="_blank" class="text-sm text-blue-500 underline hover:text-blue-700">
            Sign in
        </a>
    </span>
    <div class="p-6 mt-8">
        <form action="#">
            <div class="flex flex-col mb-2">
                <div class=" relative ">
                    <input type="text" id="create-account-pseudo" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="KorisnickoIme" value={korisnik.KorisnickoIme} onChange={handleChange} placeholder="KorisnickoIme"/>
                    </div>
                </div>
                <div class="flex gap-4 mb-2">
                    <div class=" relative ">
                        <input type="text" id="create-account-first-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="Sifra" value={korisnik.Sifra} onChange={handleChange} placeholder="Sifra"/>
                        </div>

                        </div>
                            <div class="flex w-full my-4">
                                <button type="submit" class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={egister} >
                                    Register
                                </button>
                            </div>
                        </form>


                                                        </div>
                                                    </div>

        </>
    )
}
}
export default Register
