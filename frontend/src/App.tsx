import "./index.css";
import { useState } from "react";

function App() {
    const [escrowId, setEscrowId] = useState<number | null>(null);
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

    return (
        <div className="app">
            <nav className="navbar">
                <h1>EscrowLite</h1>
                <span>Stellar Escrow</span>
            </nav>

            <main className="container">
                <section className="hero">
                    <h2>Simple & Secure Escrow</h2>
                    <p>
                        Create an escrow, fund it, and release payment securely.
                    </p>
                </section>

                <div className="grid">
                    <section className="card">
                        <h3>Create Escrow</h3>

                        <label>Client Address</label>
                        <input
                            placeholder="Enter client address"
                            value={client}
                            onChange={(e) => setClient(e.target.value)}
                        />

                        <label>Freelancer Address</label>
                        <input
                            placeholder="Enter freelancer address"
                            value={freelancer}
                            onChange={(e) => setFreelancer(e.target.value)}
                        />

                        <label>Amount</label>
                        <input
                            type="number"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />

                        <button onClick={createEscrow}>
                            Create Escrow
                        </button>
                    </section>

                    <section className="card">
                        <h3>Escrow Status</h3>

                        <div className="status-row">
                            <span>Escrow ID</span>
                            <strong>{escrowId ?? "—"}</strong>
                        </div>

                        <div className="status-row">
                            <span>Amount</span>
                            <strong>{amount || "—"}</strong>
                        </div>

                        <div className="status-row">
                            <span>Status</span>
                            <strong className="created">{status}</strong>
                        </div>

                        <div className="status-row">
                            <span>Funded</span>
                            <strong>{funded ? "Yes" : "No"}</strong>
                        </div>

                        <div className="status-row">
                            <span>Released</span>
                            <strong>{released ? "Yes" : "No"}</strong>
                        </div>

                        <div className="actions">
                            <button onClick={fundEscrow}>Fund</button>
                            <button onClick={releaseEscrow}>Release</button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default App;