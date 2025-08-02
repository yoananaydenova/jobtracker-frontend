import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface Company {
    id: number;
    name: string;
    website?: string;
}

interface JobApplication {
    id: number;
    position: string;
    status: string;
    applicationDate: string;
    company: Company;
}


export default function JobList() {

    const [applications, setApplications] = useState<JobApplication[]>([]);


    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Position</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* TODO  */}
                </TableBody>
            </Table>
        </TableContainer>
    );
}