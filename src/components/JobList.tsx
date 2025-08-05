import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface Company {
    id: number;
    name: string;
    website?: string;
    description?: string;
}

interface JobApplication {
    id: number;
    position: string;
    applicationDate: string;
    status: string;
    notes?: string;
    company: Company;
}


export default function JobList() {

    const [applications, setApplications] = useState<JobApplication[]>([]);

    useEffect(() => {
        loadJobs();
    }, []);

    const loadJobs = async () => {
        const result = await axios.get("http://localhost:8080/api/applications");
        setApplications(result.data);
    };

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