import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

const Threats = () => {
    const [threats, setThreats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating API fetch
        setTimeout(() => {
            setThreats([
                { id: 1, name: "Phishing Attack", severity: "High", status: "Active" },
                { id: 2, name: "DDoS Attack", severity: "Critical", status: "Mitigated" },
                { id: 3, name: "SQL Injection", severity: "Medium", status: "Under Review" },
                { id: 4, name: "Ransomware", severity: "Critical", status: "Active" },
                { id: 5, name: "Malware Infection", severity: "Low", status: "Resolved" },
            ]);
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <div className="threats-container">
            <h2 className="page-title">Threat Intelligence</h2>

            {loading ? (
                <Skeleton className="threats-skeleton" />
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Threat Name</TableHead>
                            <TableHead>Severity</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {threats.map((threat) => (
                            <TableRow key={threat.id}>
                                <TableCell>{threat.id}</TableCell>
                                <TableCell>{threat.name}</TableCell>
                                <TableCell>
                                    <Badge
                                        className={`severity-badge severity-${threat.severity.toLowerCase()}`}
                                    >
                                        {threat.severity}
                                    </Badge>
                                </TableCell>
                                <TableCell>{threat.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </div>
    );
};

export default Threats;
