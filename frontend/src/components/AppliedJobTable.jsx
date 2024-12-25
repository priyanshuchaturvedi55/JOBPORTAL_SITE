
import React from 'react'
import { Table,TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from '@/components/ui/badge'

const AppliedJobTable = () => {
  return (
    <div>
        <Table>
            <TableCaption>A List of your applied jobs</TableCaption>
            <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
            </TableHeader>
            <TableBody>
                {
                    [1,2,3,4].map((item, index) =>(
                        <TableRow key={index}>
                            <TableCell>25-12-2024</TableCell>
                            <TableCell>Frontend Developer</TableCell>
                            <TableCell>Google</TableCell>
                            <TableCell className="text-right "><Badge className={"text-blue-700 font-bold "} variant="ghost">Selected</Badge></TableCell>
                        </TableRow>
                    ))
                }

            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable