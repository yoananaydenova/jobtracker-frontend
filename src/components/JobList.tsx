import { useEffect, useState } from 'react';
import axios from 'axios';
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

    useEffect(() => {
        axios.get<JobApplication[]>('/api/applications')
            .then(response => {
                setApplications(response.data); 
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);


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
                    {applications.map((app) => (
                        <TableRow key={app.id}>
                            <TableCell>{app.position}</TableCell>
                            <TableCell>{app.company.name}</TableCell>
                            <TableCell>{app.status}</TableCell>
                            <TableCell>{app.applicationDate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}