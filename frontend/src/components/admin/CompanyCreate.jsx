import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setSingleCompany } from '@/redux/companySlice'
import { Loader2 } from 'lucide-react'
import { setLoading } from '@/redux/authSlice'

const CompanyCreate = () => {
    const navigate = useNavigate();
    const [companyName , setCompanyName] = useState();
    const dispatch = useDispatch();
    const {loading} = useSelector(store=>store.auth);

    const registerNewCompany = async () => {
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${COMPANY_API_END_POINT}/register` , {companyName}, {
                headers:{
                    'Content-Type':'application/json',
                    
                },
                withCredentials:true
            });
            if(res?.data?.success){
                dispatch(setSingleCompany(res.data.company))
                toast.success(res.data.message);
                const companyId = res?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`);
            }
        } catch (error) {
            // console.log(error);   
            console.error('Error registering company:', error);
            if (error.response && error.response.status === 401) {
                toast.error('Unauthorized: Please log in.');
            } else {
                toast.error('An error occurred while registering the company.');
            }  
        } finally{
            dispatch(setLoading(false));
        }
    }
    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto'>
                <div className='my-10'>
                    <h1 className='font-bold text-2xl'>Your Company Name</h1>
                    <p className='text-gray-500'>What would you like to give your company name? you can change this later.</p>
                </div>
                <Label>Company Name</Label>
                <Input
                    type='text'
                    className='my-2'
                    placeholder='JobVista , Google etc.'
                    onChange={(e) => setCompanyName(e.target.value)}
                />
                <div className='flex items-center gap-2 my-10'>
                    <Button variant='outline'onClick={() => navigate("/admin/companies")}>Cancel</Button>
                    <div>
                    {
                        loading ? <Button className = "w-full"><Loader2 className='mr-2 h-4 w-4 animate-spin'/>Please Wait</Button> : <Button onClick={registerNewCompany}>Continue</Button>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyCreate