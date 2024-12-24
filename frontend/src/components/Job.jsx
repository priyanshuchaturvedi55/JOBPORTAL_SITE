import { Bookmark } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'

const Job = () => {
  return (
    <div>
        <p>2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
        <Button className="p-2 rounded-full" size="icon">
        <Avatar className='w-10 h-10 pt-5 '>
            <AvatarImage src="https://s.tmimgcdn.com/scr/800x500/200400/accounting-tax-financial-business-logo-design_200426-original.jpg"  className="w-full h-full object-cover rounded-full" />
        </Avatar>
        </Button>
      
    </div>
  )
}

export default Job
