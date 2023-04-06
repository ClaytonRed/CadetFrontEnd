import { Container, Alert, Spinner, Button } from "react-bootstrap";
import { isCadet, isDetachmentCommander } from "../_utils";
import React, { useState } from "react";
import WelcomeSection from "./WelcomeSection";
import CadetView from "./CadetView";
import DetachmentCommanderView from "./DetachmentCommanderView";

function HomepageView() {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handlePrint = () => {
        window.print();
    };

    return (
        <Container className="homepage-container">
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            {isLoading ? (
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <div className="p-4 rounded">
                    <Container className="mt-3">
                        <WelcomeSection />
                        {isCadet() && (
                            <CadetView setIsLoading={setIsLoading} setErrorMessage={setErrorMessage} />
                        )}
                        {isDetachmentCommander() && (
                            <DetachmentCommanderView />
                        )}
                    </Container>
                    <Button variant="primary" className="mt-3" onClick={handlePrint}>
                        Print
                    </Button>
                </div>
            )}
        </Container>
    );
}

export default HomepageView;