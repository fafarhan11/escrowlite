import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./index.css";
import { useState } from "react";
function App() {
    const [escrowId, setEscrowId] = useState(null);
    const [amount, setAmount] = useState("");
    const [client, setClient] = useState("");
    const [freelancer, setFreelancer] = useState("");
    const [status, setStatus] = useState("Not Created");
    const [funded, setFunded] = useState(false);
    const [released, setReleased] = useState(false);
    const createEscrow = () => {
        if (!client || !freelancer || !amount) {
            alert("Please fill all fields");
            return;
        }
        setEscrowId(1);
        setStatus("Created");
        setFunded(false);
        setReleased(false);
    };
    const fundEscrow = () => {
        if (!escrowId) {
            alert("Create an escrow first");
            return;
        }
        setFunded(true);
        setStatus("Funded");
    };
    const releaseEscrow = () => {
        if (!funded) {
            alert("Fund the escrow first");
            return;
        }
        setReleased(true);
        setStatus("Released");
    };
    return (_jsxs("div", { className: "app", children: [_jsxs("nav", { className: "navbar", children: [_jsx("h1", { children: "EscrowLite" }), _jsx("span", { children: "Stellar Escrow" })] }), _jsxs("main", { className: "container", children: [_jsxs("section", { className: "hero", children: [_jsx("h2", { children: "Simple & Secure Escrow" }), _jsx("p", { children: "Create an escrow, fund it, and release payment securely." })] }), _jsxs("div", { className: "grid", children: [_jsxs("section", { className: "card", children: [_jsx("h3", { children: "Create Escrow" }), _jsx("label", { children: "Client Address" }), _jsx("input", { placeholder: "Enter client address", value: client, onChange: (e) => setClient(e.target.value) }), _jsx("label", { children: "Freelancer Address" }), _jsx("input", { placeholder: "Enter freelancer address", value: freelancer, onChange: (e) => setFreelancer(e.target.value) }), _jsx("label", { children: "Amount" }), _jsx("input", { type: "number", placeholder: "Enter amount", value: amount, onChange: (e) => setAmount(e.target.value) }), _jsx("button", { onClick: createEscrow, children: "Create Escrow" })] }), _jsxs("section", { className: "card", children: [_jsx("h3", { children: "Escrow Status" }), _jsxs("div", { className: "status-row", children: [_jsx("span", { children: "Escrow ID" }), _jsx("strong", { children: escrowId ?? "—" })] }), _jsxs("div", { className: "status-row", children: [_jsx("span", { children: "Amount" }), _jsx("strong", { children: amount || "—" })] }), _jsxs("div", { className: "status-row", children: [_jsx("span", { children: "Status" }), _jsx("strong", { className: "created", children: status })] }), _jsxs("div", { className: "status-row", children: [_jsx("span", { children: "Funded" }), _jsx("strong", { children: funded ? "Yes" : "No" })] }), _jsxs("div", { className: "status-row", children: [_jsx("span", { children: "Released" }), _jsx("strong", { children: released ? "Yes" : "No" })] }), _jsxs("div", { className: "actions", children: [_jsx("button", { onClick: fundEscrow, children: "Fund" }), _jsx("button", { onClick: releaseEscrow, children: "Release" })] })] })] })] })] }));
}
export default App;
//# sourceMappingURL=App.js.map