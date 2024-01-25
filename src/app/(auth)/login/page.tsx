"use client"

import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter();

  return (
    <div>
      <h1>This is Login Page</h1>
      <p>Can click button below to login</p>
      <Button variant="contained" onClick={() => router.push('/home')}>Login</Button>
      
    </div>
  )
}
  