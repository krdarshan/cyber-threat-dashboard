import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, ShieldAlert, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const ThreatDetails = () => {
    const { id } = useParams();
    const [threat, setThreat] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.cyberthreats.com/threats/${id}`) // Replace with actual API
            .then((response) => response.json())
            .then((data) => {
                setThreat(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching threat details:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
                <p className="text-xl">Loading threat details...</p>
            </div>
        );
    }

    if (!threat) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
                <p className="text-xl">Threat not found.</p>
            </div>
        );
    }

    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <Link to="/" className="flex items-center mb-4 text-blue-400 hover:underline">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Dashboard
            </Link>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold flex items-center">
                    <ShieldAlert className="w-6 h-6 mr-2 text-red-500" />
                    {threat.title}
                </h1>
                <p className="mt-2 text-gray-400">{threat.description}</p>
                <p className="mt-4 text-gray-500">
                    Reported by: <span className="font-semibold">{threat.source}</span>
                </p>
                <p className="mt-2 text-gray-500">
                    Severity: <span className="font-semibold text-red-400">{threat.severity}</span>
                </p>
                <p className="mt-2 text-gray-500">
                    Date: <span className="font-semibold">{new Date(threat.date).toLocaleString()}</span>
                </p>
                <div className="mt-4">
                    <a href={threat.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center">
                        <Globe className="w-5 h-5 mr-2" />
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ThreatDetails;
