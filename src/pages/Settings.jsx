import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Settings = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [email, setEmail] = useState("");

    return (
        <div className="settings-container">
            <h2 className="page-title">Settings</h2>

            <div className="settings-group">
                <label>Dark Mode</label>
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            </div>

            <div className="settings-group">
                <label>Email Notifications</label>
                <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>

            <div className="settings-group">
                <label>Update Email</label>
                <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <Button className="settings-save">Save Changes</Button>
        </div>
    );
};

export default Settings;
